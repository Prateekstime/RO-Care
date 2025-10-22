import { useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const navigate =useNavigate()
  return (
    <div>
        {/* Main Content */}
        <main className="md:col-span-3 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Personal Information
            </h3>
            <button  onClick={() => navigate('/profile/edit')} className="text-blue-600 font-medium text-sm">Edit</button>
          </div>

          {/* Form */}
          <div className="bg-white rounded-md shadow-sm border p-6 space-y-6">
            <div>
              <label className="text-sm font-medium block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value="Eleanor Pena"
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 bg-white text-gray-800"
              />
            </div>

            <div>
              <label className="text-sm font-medium block text-gray-700 mb-1">
                Your Gender
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 text-gray-700">
                  <input type="radio" name="gender" className="form-radio" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2 bg-green-100 border border-green-400 px-4 py-2 rounded-md">
                  <input type="radio" name="gender" checked readOnly />
                  <span className="text-green-700 font-medium">Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value="eleanorpena@abcd.com"
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 bg-white text-gray-800"
              />
            </div>

            <div>
              <label className="text-sm font-medium block text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                value="+91876543210"
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 bg-white text-gray-800"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-md shadow-sm border p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h4>
            <div className="space-y-4 text-sm text-gray-800">
              {[
                "What happens when I update my email address (or mobile number)?",
                "You’ll receive all your account related communication on your updated email address (or mobile number).",
                "When will my Techno RO account be updated with the new email address (or mobile number)?",
                "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
                "What happens when I update my email address?",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start border-b pb-3"
                >
                  <p>{item}</p>
                  <span className="text-xl text-gray-500">+</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delete */}
          <div>
            <button className="text-red-600 font-medium text-sm">
              Delete Account
            </button>
          </div>
        </main>
    </div>
  );
}
