import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate =useNavigate();
  const [editMode] = useState(true); // always in edit mode
  const [profile, setProfile] = useState({
    fullName: 'Eleanor Pena',
    email: 'eleanorpena@abcd.com',
    mobile: '+91876543210',
    gender: 'female',
    image: '', // uploaded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      

        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
            
          <h3 className="text-xl font-semibold text-gray-800">Edit Information</h3>

          {/* Editable Form */}
          <div className=" p-6 space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-start space-y-2">
              <label htmlFor="profilePic" className="cursor-pointer relative group">
                <img
                  src={profile.image || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition">
                  Change
                </div>
              </label>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 mt-1 text-gray-800 bg-white border-gray-300"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="text-sm font-medium block text-gray-700 mb-1">Your Gender</label>
              <div className="flex space-x-4">
                {['male', 'female'].map((gender) => (
                  <label
                    key={gender}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md border cursor-pointer ${
                      profile.gender === gender
                        ? 'bg-green-100 border-green-400 text-green-700 font-medium'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={profile.gender === gender}
                      onChange={handleChange}
                    />
                    <span>{gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 mt-1 text-gray-800 bg-white border-gray-300"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm font-medium block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={profile.mobile}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 mt-1 text-gray-800 bg-white border-gray-300"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={()=>{navigate("/profile/")}}>
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
