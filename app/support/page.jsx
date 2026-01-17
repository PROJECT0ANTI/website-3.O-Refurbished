"use client";

import NavBar from "../(components)/NavBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();

  return (
    <>
      <NavBar />

      <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-6">App Support</h1>

        <p className="mb-6 text-gray-300">
          If you need help with the ANTI-0 Mobile Application, we’re here to support you.
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
          <li>Account or login issues</li>
          <li>App functionality questions</li>
          <li>Bug reports or unexpected behavior</li>
          <li>Data, privacy, or security-related concerns</li>
        </ul>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How to contact us</h2>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:support@antiai.ltd"
              className="underline hover:text-white"
            >
              support@antiai.ltd
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            We usually respond within 24–48 business hours.
          </p>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          <p>
            For details on how we handle user data, please review our{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-12">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-500 text-gray-300 hover:text-white hover:border-white transition"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
