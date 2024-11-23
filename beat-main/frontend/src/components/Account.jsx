import React from 'react';

const Account = () => {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="w-full max-w-md text-center"> {/* Set a max width for better alignment */}
        <h1 className="text-2xl font-bold mb-4 mt-4">Account Settings</h1>
        <p>Manage your account details, including your email, password, and other settings.</p>
        <div className="mt-4">
          <h2 className="text-xl">Email: example@example.com</h2>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full">Change Email</button>
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
