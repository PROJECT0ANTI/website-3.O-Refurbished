"use client";

import { useRouter } from "next/navigation";

export default function TermsAndConditionsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <p className="text-gray-300 mb-4">
          These Terms & Conditions govern your access to and use of the Anti AI
          website, products, services, and any related communication. By using
          this website, you agree to comply with these terms. If you do not agree,
          you should discontinue use of the website immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Purpose of the Website
        </h2>

        <p className="text-gray-300 mb-4">
          The Anti AI website is intended to provide information about our
          services, research, and initiatives related to artificial intelligence
          and ethical technology. All content is provided for informational
          purposes only and does not constitute professional or legal advice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Acceptable Use
        </h2>

        <p className="text-gray-300 mb-4">
          You agree to use this website only for lawful purposes. You must not
          misuse the website, attempt unauthorized access, disrupt services,
          submit false information, or engage in any activity that may harm the
          website, its users, or Anti AI.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Intellectual Property
        </h2>

        <p className="text-gray-300 mb-4">
          All content on this website, including text, graphics, branding,
          layouts, and code, is the property of Anti AI unless otherwise stated.
          Unauthorized copying, reproduction, distribution, or use of any
          content is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          User Submissions
        </h2>

        <p className="text-gray-300 mb-4">
          Any information you submit through contact forms or other inputs must
          be accurate and lawful. Submission of information does not create a
          contractual, employment, or partnership relationship unless formally
          agreed upon in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Privacy
        </h2>

        <p className="text-gray-300 mb-4">
          Your use of this website is also governed by our Privacy Policy. By
          accessing this site, you consent to the collection and use of your
          information as described in that policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Limitation of Liability
        </h2>

        <p className="text-gray-300 mb-4">
          Anti AI shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from your use of this website or reliance
          on its content. Use of the website is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Third-Party Links
        </h2>

        <p className="text-gray-300 mb-4">
          This website may contain links to third-party websites. Anti AI does not
          control or endorse the content or practices of these external sites and
          is not responsible for any issues arising from their use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Changes to These Terms
        </h2>

        <p className="text-gray-300 mb-4">
          We reserve the right to update or modify these Terms & Conditions at any
          time. Changes will be effective immediately upon posting. Continued
          use of the website indicates acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Governing Law
        </h2>

        <p className="text-gray-300 mb-12">
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India.
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
