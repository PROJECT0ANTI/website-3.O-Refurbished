"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import NavBar from "../../(components)/NavBar";
import { supabase } from "@/lib/supabase";

export default function ApplyPage() {
  const { id: jobId } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cover_letter: "",
    resume: null,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // 🔒 HARD VALIDATION (no bypass)
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.cover_letter ||
      !form.resume
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1️⃣ Upload resume
      const fileExt = form.resume.name.split(".").pop();
      const filePath = `${jobId}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, form.resume, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // 2️⃣ Get public URL
      const { data: urlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      if (!urlData?.publicUrl) {
        throw new Error("Failed to get resume URL");
      }

      // 3️⃣ Insert application
      const { error: insertError } = await supabase
        .from("applications")
        .insert({
          job_id: jobId,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          cover_letter: form.cover_letter.trim(),
          resume_url: urlData.publicUrl,
        });

      if (insertError) throw insertError;

      setSuccess(true);

      setTimeout(() => {
        router.push("/career");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <NavBar />

      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#151617] p-6 rounded-lg text-white"
        >
          <h1 className="text-2xl font-bold mb-6">
            Apply for this role
          </h1>

          <input
            required
            minLength={2}
            placeholder="Full Name"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            required
            minLength={8}
            placeholder="Phone"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <label className="block text-sm text-gray-300 mb-2">
            Resume (PDF / DOC / DOCX)
          </label>

          <input
            required
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full mb-4"
            onChange={(e) =>
              setForm({ ...form, resume: e.target.files[0] })
            }
          />

          <textarea
            required
            minLength={20}
            placeholder="Cover Letter"
            rows="4"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
            onChange={(e) =>
              setForm({ ...form, cover_letter: e.target.value })
            }
          />

          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          {success && (
            <p className="text-green-500 mb-4">
              Application submitted successfully.
            </p>
          )}

          <button
            disabled={loading}
            className="w-full bg-blue-600 py-3 rounded hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
}
