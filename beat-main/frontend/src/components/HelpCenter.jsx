// HelpCenter.jsx
import React from 'react';

const HelpCenter = () => {
  return (
    <div className="p-4 h-screen overflow-y-scroll">
      <h1 className="text-2xl font-bold mt-20 mb-4">Help Center</h1>
      <p className="mb-4">If you need assistance, please check the following resources:</p>

      {/* FAQs Section */}
      <h2 className="text-xl font-semibold mt-6">Frequently Asked Questions (FAQs)</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>
          <strong>How do I reset my password?</strong>
          <p>You can reset your password by clicking on "Forgot Password" on the login page and following the instructions.</p>
        </li>
        <li>
          <strong>How do I change my email address?</strong>
          <p>You can change your email address in the "Account" settings section after logging in.</p>
        </li>
        <li>
          <strong>How can I contact support?</strong>
          <p>You can contact support using the "Contact Support" link below or by emailing us directly.</p>
        </li>
      </ul>

      {/* Support Resources Section */}
      <h2 className="text-xl font-semibold mt-6">Support Resources</h2>
      <ul className="mt-2">
        <li>
          <a href="https://impraveen.onrender.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Visit FAQs">FAQs</a> - Find answers to common questions.
        </li>
        <li>
          <a href="https://impraveen.onrender.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Contact Support">Contact Support</a> - Get help from our support team.
        </li>
        <li>
          <a href="https://impraveen.onrender.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Join Community Forum">Community Forum</a> - Join discussions with other users and share tips.
        </li>
      </ul>

      <p className="mt-4">You can also reach out to us via email at <a href="mailto:Techsiksha1999@gmail.com" className="text-blue-500 hover:underline">Techsiksha1999@gmail.com</a>.</p>

      <h2 className="text-xl font-semibold mt-6">Additional Contact Information</h2>
      <p>If you require immediate assistance, please call our support hotline:</p>
      <p className="font-bold">Phone: 9109481480</p>
      <p>Our support team is available from 9 AM to 5 PM (EST), Monday to Friday.</p>
    </div>
  );
};

export default HelpCenter;
