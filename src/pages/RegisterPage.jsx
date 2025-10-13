import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    subscribe: false,
    robotCheck: false,
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Live password validation
    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must be 8+ chars, include uppercase, lowercase, number & special char."
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!formData.robotCheck) {
      alert("Please confirm you are not a robot!");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
    console.log(formData); // For debugging
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700">
            RO <span className="text-blue-500">Techno</span>
          </h1>
          <p className="text-lg text-gray-600 mt-1">Create Your Account </p>
          <div className="my-6 h-px w-full bg-gradient-to-r from-blue-200 via-blue-800 to-blue-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9XXXXXXXXX"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              placeholder="Street address, building, etc."
              required
              className="w-full px-5 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Apartment, suite, landmark (optional)"
              className="w-full px-5 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City + State */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Country + Zip */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip / Pin
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip/Pin"
                required
                className="w-full px-5 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-1">
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="accent-blue-600 w-4 h-4"
              />
              <span>Subscribe to Newsletter</span>
            </label>

            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="robotCheck"
                checked={formData.robotCheck}
                onChange={handleChange}
                required
                className="accent-blue-600 w-4 h-4"
              />
              <span>I’m not a robot</span>
            </label>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Register
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/loginpage"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
