"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          Anti AI ("we", "our", "us") respects your privacy and is committed to
          protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website or interact with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information We Collect
        </h2>

        <p className="text-gray-300 mb-4">
          We may collect personal information that you voluntarily provide to us,
          including but not limited to your name, email address, phone number, and
          any message or inquiry you submit through our contact forms.
        </p>

        <p className="text-gray-300 mb-4">
          We may also automatically collect certain technical information such as
          IP address, browser type, device information, operating system, and
          usage data to help us understand how users interact with our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>

        <p className="text-gray-300 mb-4">
          The information we collect may be used to respond to your inquiries,
          provide services, improve our website, enhance user experience,
          maintain security, and comply with legal obligations.
        </p>

        <p className="text-gray-300 mb-4">
          We do not sell, rent, or trade your personal information to third
          parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Data Protection and Security
        </h2>

        <p className="text-gray-300 mb-4">
          We implement reasonable technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of
          transmission over the Internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Third-Party Links
        </h2>

        <p className="text-gray-300 mb-4">
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices or content of those
          third parties. We encourage you to review their privacy policies before
          providing any personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Cookies and Tracking Technologies
        </h2>

        <p className="text-gray-300 mb-4">
          We may use cookies or similar tracking technologies to enhance
          functionality and analyze website performance. You can choose to
          disable cookies through your browser settings; however, doing so may
          affect certain features of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Your Rights
        </h2>

        <p className="text-gray-300 mb-4">
          Depending on your jurisdiction, you may have the right to access,
          correct, or request deletion of your personal information. To exercise
          these rights, please contact us through the contact page of this
          website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Changes to This Policy
        </h2>

        <p className="text-gray-300 mb-4">
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be posted on this page with an updated effective
          date. Continued use of our website after changes indicates acceptance
          of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-300 mb-12">
          If you have any questions or concerns regarding this Privacy Policy or
          our data practices, please contact us through the contact page of this
          website.
        </p>

        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border border-gray-500 text-gray-300 hover:text-white hover:border-white transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
