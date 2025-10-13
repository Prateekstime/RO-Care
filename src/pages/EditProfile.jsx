import React, { useState } from 'react';

const EditProfile = () => {
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
    <div className="bg-[#f9fafb] p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-md border shadow-sm p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img
                src={profile.image || 'https://via.placeholder.com/48'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-semibold text-gray-800">{profile.fullName}</h2>
          </div>

          <button className="w-full text-left text-[#1f2937] font-medium border rounded-md py-2 px-3 hover:bg-gray-100">
            MY PRDERS STATUS
          </button>

          <div className="border-t pt-4 text-sm text-gray-700 space-y-2">
             <button
              className="w-full text-left text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors"
              onClick={() => console.log("Account Settings clicked")}
            >
              Account Settings
            </button>
            <p className="text-[#3b82f6] font-medium">Profile Information</p>
            <p>Manage Address</p>
            <p>My Bookings</p>
            <p>My AMC Plans</p>
            <p>Favorite Items</p>
            <p>Settings</p>
          </div>

          <div className="border-t pt-4 text-sm text-gray-700">
            <p className="font-medium">PAYMENTS</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
            
          <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>

          {/* Editable Form */}
          <div className="bg-white rounded-md shadow-sm border p-6 space-y-6">
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
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
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
