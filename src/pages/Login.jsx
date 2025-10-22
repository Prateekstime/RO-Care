import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../assets/LoginLogo.png";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user or token (example)
    localStorage.setItem("user", JSON.stringify({ phone: formData.phone }));

    // Navigate to next page (change route as needed)
    navigate("/registerpage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px] bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 p-8">
          <img
            src={LoginLogo}
            alt="Login visual"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 w-full">
          <img src={logo} alt="Logo" className="w-32 mb-6 " />

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Nice to see you again 👋
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your phone number to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                // required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#7EC1B1] hover:bg-[#66ac9b] text-white py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
