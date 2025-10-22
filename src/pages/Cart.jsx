import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate("/payment");
  };

  const goToSuccessPage = () => {
    navigate("/payment");
  };

  return (
    <>
      {" "}
      <div className="w-full min-h-screen bg-gray-50">
        {" "}
        <div className="max-w-[1300px] mx-auto p-6">
          {/* Header */}{" "}
           <div className="flex items-center">
        <div className="flex-grow border-t border-gray-900"></div>
        <span className="mx-2 text-3xl font-semibold ">My Cart</span>
        <div className="flex-grow border-t border-gray-900"></div>
      </div>
          <div className="flex mt-10 flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="md:w-2/3 space-y-5">
              {/* Delivery Address */}
              <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">Deliver to: </span>
                    <span className="font-semibold text-gray-800">
                      Jane Cooper, 39495
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 text-xs ml-2 rounded">
                      Home
                    </span>
                    <div className="text-sm text-gray-600 mt-1">
                      4517 Washington Ave, Manchester, Kentucky 39495
                    </div>
                  </div>
                  <button className="text-sm text-[#7EC1B1] border border-[#7EC1B1] px-2 my-auto py-1 rounded-lg font-medium">
                    Change
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-xl hover:scale-[1.01] transition-transform relative"
                >
             

                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center border">
                      <img
                        src="/kent-filter.jpg"
                        alt="KENT Gold Filter"
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-800 leading-snug">
                          KENT Gold Spare Kit Gold Pleated Filter Cartridge
                          (0.5, Pack Of 1)
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Delivery by{" "}
                          <span className="font-medium">Sun Jun 2024</span>{" "}
                          <span className="text-blue-600 ml-2">Free</span>
                        </p>
                      </div>

                      {/* Price Row */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-gray-400 line-through">₹398</span>
                        <span className="font-bold text-gray-800">₹299</span>
                        <span className="text-[#7EC1B1] text-xs font-medium  px-2 py-0.5 rounded">
                         25% Off 
                         <span className="ml-2">1 Offer</span> 
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center  overflow-hidden ">
                          <button className="w-8 h-8 shadow-md border border-gray-200 rounded-lg font-bold">
                            -
                          </button>
                          <span className="px-4 py-2  text-gray-700 font-medium">
                            3
                          </span>
                          <button className="w-8 h-8 shadow-md rounded-lg border border-gray-200 font-bold">
                            +
                          </button>
                        </div>

                        {/* Favorite + Remove */}
                        <button className="flex items-center gap-1 text-sm text-[#7EC1B1] border border-[#7EC1B1] px-3 py-2 rounded-xl hover:bg-pink-50 transition">
                          Mark as Favorite
                        </button>
                        <button className="flex items-center gap-1 text-sm text-[#7EC1B1] border border-[#7EC1B1] px-3 py-2 rounded-xl hover:bg-red-50 transition">
                          🗑️ Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

             
            </div>

            {/* Right Section */}
            <div className="md:w-1/3 space-y-6">
              {/* Price Details */}
             
              {/* Offers */}
              <div className="bg-white rounded-lg shadow-md border p-5">
                <h2 className="font-bold mb-4 text-lg text-gray-800">Offers</h2>
                <div className="space-y-5">
                  {[
                    "UPI Off ₹50",
                    "Debit Card Off ₹100",
                    "Credit Card Off 5%",
                  ].map((offer, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#7EC1B1] flex items-center justify-center text-white font-bold">
                        %
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-800">
                          {offer}
                        </div>
                        <div className="text-xs text-gray-500">
                          {index === 0
                            ? "Pay using UPI and get instant ₹50 off"
                            : index === 1
                            ? "Pay using Debit Card and save ₹100"
                            : "Pay using Credit Card and get 5% off"}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="text-[#7EC1B1] text-sm hover:underline">
                    View More Offers
                  </button>
                </div>
              </div>

              {/* Safe Payments */}
              <div className="bg-gray-50 p-4 rounded-lg border text-gray-600 text-sm flex flex-col items-center shadow-sm">
                <div className="flex">

                <svg
                  className="w-12 h-12 text-black mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                Safe & Secure Payments. Easy Returns. 100% Authentic Products.
                </div>
                <p>Need Help? Visit the <span className="text-[#7EC1B1]"> Help Center</span>or<span className="text-[#7EC1B1]">Contact Us</span></p>
              </div>
               <div className="bg-white rounded-lg shadow-md border p-5">
                <h2 className="font-bold mb-4 text-lg text-gray-800">
                  Price Details
                </h2>
                <div className="space-y-3 text-sm text-gray-700 border-t pt-3">
                  <div className="flex justify-between">
                    <span>Price (3 items)</span>
                    <span>₹1187</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="text-green-600">-₹300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>₹3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span>
                      <span className="line-through text-gray-400">₹300</span>
                      <span className="text-blue-600 ml-1">Free</span>
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-gray-800">
                    <span>Total Amount</span>
                    <span>₹900</span>
                  </div>
                  <p className="text-blue-600 text-xs pt-2">
                    You saved ₹600 on this order 🎉
                  </p>
                </div>
                 {/* Place Order Button */}
              {!showPaymentSection && (
                <button
                  className="w-full mt-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold ml-auto block shadow-md hover:scale-105 transform transition"
                  onClick={() => setShowPaymentSection(true)}
                >
                  Place Order
                </button>
              )}
              </div>

            </div>
            
          </div>
          {/* Payment Section */}
          {showPaymentSection && (
            <div className="mt-10 bg-white rounded-lg shadow-lg p-6 border space-y-4">
              <div className="flex items-center justify-between border p-3 rounded-lg bg-gray-50">
                <span className="text-gray-700 text-sm">
                  If booking services, please select a time slot
                </span>
                <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-blue-50">
                  Select Time Slot
                </button>
              </div>
              <div className="flex items-center border p-3 rounded-lg bg-gray-50">
                <input type="checkbox" id="gst" className="mr-2" />
                <label htmlFor="gst" className="text-gray-700 text-sm">
                  Use GST Invoice
                </label>
              </div>
              <div
                onClick={goToPayment}
                className="border p-3 rounded-lg bg-gray-50 cursor-pointer hover:shadow-md transition"
              >
                <h3 className="font-semibold text-blue-600 text-sm">
                  💳 4 Payment Options
                </h3>
              </div>
              <div className="border p-3 rounded-lg bg-gray-50 text-sm text-gray-700">
                Order confirmation will be sent to your registered email 📧
              </div>
              <div className="flex justify-end gap-3">
                <NavLink to={"/cart"}>
                  <button
                    className="border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
                    onClick={() => setShowPaymentSection(false)}
                  >
                    Back to Cart
                  </button>
                </NavLink>
                <button
                  onClick={goToSuccessPage}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transform transition"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          
        </div>
      </div>
    </>
  );
};

export default Cart;
