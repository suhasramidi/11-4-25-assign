// write the component code here
import React from 'react';

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://preview.redd.it/penis-plugs-where-and-how-do-i-clean-them-when-my-boy-v0-l5c5jvlhu63d1.jpeg?auto=webp&s=7c82f1fff0cc2050803bc50490813044df1a2600";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (555) 123-4567";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 mt-6 border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <img
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          src={profilePhoto}
          alt="Profile"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-500 text-center">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
