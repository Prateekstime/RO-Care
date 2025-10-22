import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RegisterImg from "../assets/LoginLogo.png";
import logo from "../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef([]);

  // Get user data from previous page or use defaults
  const userData = location.state?.userData || {
    name: "Eleanor Pena",
    email: "eleanor@example.com",
    phone: "919876543210"
  };

  // Timer for OTP resend
  useEffect(() => {
    let interval;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    
    // Only allow numbers and backspace
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      // Auto focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }

    // Handle backspace
    if (e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace on empty input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("").slice(0, 4);
      setOtp([...newOtp, ...Array(4 - newOtp.length).fill("")]);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    
    if (enteredOTP.length !== 4) {
      setError("Please enter complete OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // ✅ Simulated OTP Verification
      const correctOTP = "1234"; // Replace with actual API validation
      
      if (enteredOTP === correctOTP) {
        // ✅ Save user info to localStorage
        const verifiedUserData = {
          ...userData,
          verified: true,
          timestamp: new Date().toISOString(),
        };

        localStorage.setItem("user", JSON.stringify(verifiedUserData));
        console.log("User saved to localStorage:", verifiedUserData);

        // ✅ Redirect after successful verification
        navigate("/", { 
          state: { message: "Registration successful!" },
          replace: true 
        });
      } else {
        setError("Invalid OTP. Please try again.");
        // Clear OTP on wrong attempt
        setOtp(["", "", "", ""]);
        inputRefs.current[0].focus();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = () => {
    if (!canResend) return;

    setTimer(30);
    setCanResend(false);
    setOtp(["", "", "", ""]);
    setError("");
    inputRefs.current[0].focus();
    
    // Simulate OTP resend
    console.log("OTP resent to:", userData.phone);
    // Add your OTP resend API call here
  };

  const maskedPhone = userData.phone ? 
    `${userData.phone.slice(0, 2)}******${userData.phone.slice(-3)}` : 
    "91******123";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px] bg-white shadow-lg rounded-xl overflow-hidden mx-4">
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center p-8 bg-gray-50">
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
            <span className="font-medium">{maskedPhone}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* OTP Input Boxes */}
            <div className="flex justify-between gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-14 h-14 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] focus:border-transparent bg-white transition-all duration-200"
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* Resend OTP */}
            <div className="text-center">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="text-[#7EC1B1] hover:text-[#66ac9b] font-medium transition-colors duration-200"
                >
                  Resend OTP
                </button>
              ) : (
                <p className="text-gray-500">
                  Resend OTP in <span className="font-medium">{timer}s</span>
                </p>
              )}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isLoading || otp.join("").length !== 4}
              className="w-full bg-[#7EC1B1] hover:bg-[#66ac9b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </button>
          </form>

          {/* Back to previous page */}
          <button
            onClick={() => navigate(-1)}
            className="w-full mt-4 text-gray-600 hover:text-gray-800 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;