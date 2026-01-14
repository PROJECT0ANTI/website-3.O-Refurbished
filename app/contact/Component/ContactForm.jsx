// import React from 'react'

// function ContactForm() {
//   return (
//     <div className="bg-[#151617] p-6 rounded-lg ">
//       <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
//       <p className="mb-4">Our Team will get back to you shortly</p>
//       <form>
//         <input className="w-full mb-4 p-2 bg-gray-800 rounded" type="text" placeholder="First Name" />
//         <input className="w-full mb-4 p-2 bg-gray-800 rounded" type="text" placeholder="Last Name" />
//         <div className="flex mb-4">
//           <input className="w-1/2 mr-2 p-2 bg-gray-800 rounded" type="email" placeholder="Email" />
//           <input className="w-1/2 ml-2 p-2 bg-gray-800 rounded" type="tel" placeholder="Phone Number" />
//         </div>
//         <textarea className="w-full mb-4 p-2 bg-gray-800 rounded" rows="4" placeholder="Type message here"></textarea>
//         <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ContactForm

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

function ContactForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await supabase.from("contacts").insert([
      {
        first_name: form.first_name,
        last_name: form.last_name || null,
        email: form.email,
        phone: form.phone || null,
        message: form.message,
      },
    ]);

    if (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    setLoading(false);
  }

  return (
    <div className="bg-[#151617] p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">Let’s Connect</h2>
      <p className="mb-4 text-gray-400">
        Our team will get back to you shortly
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 bg-gray-800 rounded"
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          value={form.first_name}
          onChange={handleChange}
        />

        <input
          className="w-full mb-4 p-2 bg-gray-800 rounded"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
        />

        <div className="flex mb-4 gap-4">
          <input
            className="w-1/2 p-2 bg-gray-800 rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-1/2 p-2 bg-gray-800 rounded"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="w-full mb-4 p-2 bg-gray-800 rounded"
          rows="4"
          name="message"
          placeholder="Type message here"
          required
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && (
          <p className="mt-4 text-green-500">
            Message sent successfully.
          </p>
        )}

        {error && (
          <p className="mt-4 text-red-500">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
