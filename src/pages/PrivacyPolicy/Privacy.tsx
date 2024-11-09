import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-5xl font-bold mb-6 text-center text-green-700">Privacy Policy</h1>
        
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Introduction</h2>
          <p className="text-lg text-gray-700">
            At MobyLife Ltd, we value your privacy and are committed to protecting your personal information. This policy explains the data we collect, how it is used, and the measures we take to keep it secure. By using our services, you agree to the practices outlined here.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Information Collection</h2>
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">Personal Information</h3>
          <p className="text-lg text-gray-700">
            We collect personal information such as your name, email address, and phone number when you use our services or register on our platform.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">Automatically Collected Data</h3>
          <p className="text-lg text-gray-700">
            We automatically collect data about your device, including IP address, browser type, and usage patterns to improve our service.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">Social Media Information</h3>
          <p className="text-lg text-gray-700">
            If you choose to connect your social media accounts, we may collect information such as usernames and contacts from these platforms.
          </p>
        </section>

        {/* Use of Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Use of Information</h2>
          <p className="text-lg text-gray-700">
            We use the collected data to improve our services, process transactions, communicate with you, and provide personalized experiences. This may include using your data for analytics, marketing, or customer support.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Information Sharing</h2>
          <p className="text-lg text-gray-700">
            We do not sell your personal information. We may share data with trusted third-party vendors to provide essential services, comply with legal obligations, and enhance user experience. We ensure that third parties uphold stringent data protection standards.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Data Security</h2>
          <p className="text-lg text-gray-700">
            We employ industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. While we strive to ensure complete security, please note that no method of transmission over the internet is fully secure.
          </p>
        </section>

        {/* User Rights and Choices */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">User Rights and Choices</h2>
          <p className="text-lg text-gray-700">
            You have the right to access, update, or delete your personal data. Please contact us if you wish to make changes or have any concerns about the information we store.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Policy Updates</h2>
          <p className="text-lg text-gray-700">
            We may update this Privacy Policy periodically. Any changes will be posted on this page, and significant changes will be communicated to you via email or other channels.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Contact Information</h2>
          <p className="text-lg text-gray-700">
            If you have any questions, concerns, or requests regarding your privacy, please contact us at <a href="mailto:contact@mobylife.com" className="text-green-500 underline">contact@mobylife.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
