import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import downArrow from "../assets/downArrow.png";
import Cross from "../assets/Cross.png";


const RequestForm = ({ setRequestForm }) => {
  const navigate =useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    category: "",
    pinCode: "",
    state: "",
    city: "",
    serviceType: "",
    address: "",
    landmark: "",
  });
  const [submitted, setSubmitted] = useState(false);

    const handleClose = () => {
      console.log("close clickk")
    navigate(-1); 
  };

  // Disable background scroll when form is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate successful submission
    setTimeout(() => {
      setSubmitted(false);
      if (onClose) onClose(); // ✅ ensure function exists before calling
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3"
      onClick={handleSubmit
       
      }
    >
      {submitted ? (
        <div
          className="bg-green-500 text-white p-4 rounded-md text-center shadow-lg cursor-pointer"
          onClick={(e) => e.stopPropagation()} 
        >
          Request submitted, you will receive a call from us.
        </div>
      ) : (
        <div
          className="relative w-full max-h-[500px] overflow-y-auto max-w-md p-5 bg-white shadow-lg rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={()=> {setRequestForm(false)}}
            className="absolute top-2 right-2 hover:opacity-80"
          >
            <img src={Cross} alt="Close" className="w-5 h-5" />
          </button>

        
          <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
            Submit Your Request
          </h2>

         
          <form onSubmit={handleSubmit} className="space-y-2 text-sm flex flex-col">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full bg-slate-100 p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="w-full p-2 border bg-slate-100 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border bg-slate-100 rounded"
              onChange={handleChange}
              required
            />

            {/* Category + Pin Code */}
            <div className="flex gap-2">
              <div className="relative w-1/2">
                <select
                  name="category"
                  className="w-full p-2 bg-slate-100 text-gray-700 border rounded appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="home">Home</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                className="w-1/2 p-2 border bg-slate-100 rounded"
                onChange={handleChange}
                required
              />
            </div>

            {/* State + City */}
            <div className="flex gap-2">
              <div className="relative w-1/2">
                <select
                  name="state"
                  className="w-full p-2 text-gray-700 bg-slate-100 border rounded appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
              <div className="relative w-1/2">
                <select
                  name="city"
                  className="w-full p-2 border rounded text-gray-700 bg-slate-100 appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              {[
                "Services",
                "New Purchase",
                "Repair or Service",
                "Installation or Uninstallation",
                "AMC Plan",
              ].map((type, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <input
                    type="radio"
                    name="serviceType"
                    value={type}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-gray-800">{type}</span>
                </label>
              ))}
            </div>

            <input
              type="text"
              name="address"
              placeholder="Full Address"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RequestForm;
