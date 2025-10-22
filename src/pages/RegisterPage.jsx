import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImg from "../assets/LoginLogo.png";
import logo from "../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    console.log("Entered OTP:", enteredOTP);

    // ✅ After successful OTP verification
    navigate("/"); // Redirect to home or dashboard page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center p-8">
          <img
            src={RegisterImg}
            alt="Register Visual"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center p-8 md:p-16 w-full">
          <img src={logo} alt="Logo" className="w-40 mb-8" />

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Verify OTP
          </h2>
          <p className="text-gray-600 mb-6">
            A 4-digit verification code has been sent to{" "}
            <span className="font-medium">91******123</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input Boxes */}
            <div className="flex justify-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-14 h-14 text-center text-lg font-semibold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] bg-gray-50"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-[#7EC1B1] hover:bg-[#66ac9b] text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
