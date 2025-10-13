import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login clicked!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          RO <span className="text-blue-500">Techno</span>
        </h1>

        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Welcome Back 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span>Remember Me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            Login
          </button>

          {/* Signup link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <a
              href="/registerpage"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>

      
    </div>
  );
};

export default Login;
