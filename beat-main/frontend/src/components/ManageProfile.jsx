import React from 'react';

const ManageProfile = () => {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="w-full max-w-md"> {/* Set a max width for better alignment */}
        <h1 className="text-2xl font-bold mt-4 mb-4 text-center">Manage Your Profile</h1>
        <p className="text-center mb-4">Update your profile information, including your name, photo, and preferences.</p>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input 
              type="text" 
              className="border p-2 w-full text-black" 
              placeholder="Your Name" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Profile Photo URL:</label>
            <input 
              type="text" 
              className="border p-2 w-full text-black" 
              placeholder="Image URL" 
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ManageProfile;
