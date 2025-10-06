
import { useState } from "react";
import img from "../assets/img.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileSetting = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "Eleanor",
    lastName: "Pena",
    gender: "Female",
    email: "eleanorpena@abcd.com",
    mobile: "+919876543210",
    image: img,
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUser({ ...user, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    toast.error("Your account has been deleted!");
    navigate("/");
  };

  return (
    <div className="w-full bg-gray-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-72 border border-gray-200 shadow-md rounded-xl p-4 bg-white">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="relative w-16 h-16">
                <img
                  src={user.image}
                  alt="Profile"
                  className="rounded-full w-16 h-16 border shadow-md object-cover"
                />
                <label
                  htmlFor="profilePic"
                  className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 00-2 2v1h16V5a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 8H2v7a2 2 0 002 2h12a2 2 0 002-2V8zm-6 3a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <input
                  id="profilePic"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Hello,</p>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </h2>
              </div>
            </div>

            <ul className="mt-4 space-y-1 sm:space-y-2">
              {[
                { to: "/my-booking", label: "My Bookings" },
                { to: "/my-amc-plain", label: "My AMC Plans" },
                { to: "/manage-addresses", label: "Manage Address" },
                { to: "/payment-method", label: "Manage Payment" },
                { to: "/favourite-items", label: "Favorite Items" },
                { to: "/refer", label: "Refer & Earn" },
                { to: "/help-support", label: "Help & Support" },
              ].map((item, i) => (
                <NavLink
                  key={i}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm sm:text-base transition-all ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Main Profile Card */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
              Personal Information
            </h3>
            <label className="font-semibold block mb-2 text-gray-700 text-sm sm:text-base">
              Your Name
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm sm:text-base"
              />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>

            <label className="font-semibold block mt-6 mb-2 text-gray-700 text-sm sm:text-base">
              Your Gender
            </label>
            <div className="flex flex-wrap gap-3">
              {["Male", "Female"].map((g) => (
                <label
                  key={g}
                  className={`flex items-center px-3 sm:px-4 py-2 border rounded-md cursor-pointer transition text-sm sm:text-base ${
                    user.gender === g
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={user.gender === g}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>

            <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-gray-800">
              Contact Information
            </h3>
            <label className="font-semibold block mb-2 text-gray-700 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm sm:text-base"
            />

            <label className="font-semibold block mt-6 mb-2 text-gray-700 text-sm sm:text-base">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm sm:text-base"
            />

            <div className="mt-8 text-right">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow hover:from-blue-600 hover:to-blue-700 transition text-sm sm:text-base"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 sm:mt-10 bg-white shadow-md rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
            FAQs
          </h3>
          <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base">
            <div>
              <p className="font-semibold">
                What happens when I update my email address (or mobile number)?
              </p>
              <p className="mt-2 text-gray-600">
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account-related communication on your updated
                email address (or mobile number).
              </p>
            </div>

            <div>
              <p className="font-semibold">
                When will my Techno RO account be updated with the new email
                address (or mobile number)?
              </p>
              <p className="mt-2 text-gray-600">
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                What happens to my existing Techno RO account when I update my
                email address (or mobile number)?
              </p>
              <p className="mt-2 text-gray-600">
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your order history, saved information,
                and personal details.
              </p>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="mt-4 px-4 py-2 rounded-md bg-red-100 text-red-600 font-medium hover:bg-red-200 transition"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold text-gray-800">
              Confirm Account Deletion
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSetting;

