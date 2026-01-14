"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import NavBar from "../../(components)/NavBar";
import { supabase } from "@/lib/supabase";

export default function ApplyPage() {
  const { id: jobId } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cover_letter: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("applications").insert([
      {
        job_id: jobId,
        name: form.name,
        email: form.email,
        phone: form.phone,
        cover_letter: form.cover_letter,
      },
    ]);

    if (error) {
      console.error(error);
      setError("Failed to submit application.");
    } else {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        cover_letter: "",
      });
    }

    setLoading(false);
  }

  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 py-10 text-white max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Apply for this role</h1>

        {success && (
          <p className="text-green-500 mb-4">
            Application submitted successfully.
          </p>
        )}

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 bg-gray-800 rounded"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="w-full p-2 bg-gray-800 rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full p-2 bg-gray-800 rounded"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full p-2 bg-gray-800 rounded"
            onChange={(e) =>
            setForm({ ...form, resume: e.target.files[0] })
            }
          />


          <textarea
            className="w-full p-2 bg-gray-800 rounded"
            rows="4"
            name="cover_letter"
            placeholder="Cover Letter"
            value={form.cover_letter}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 py-2 rounded hover:opacity-90"
          >
            {loading ? "Submitting…" : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
}
