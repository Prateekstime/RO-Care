import React from "react";

const ServiceTracking = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Booking Info */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-gray-700 font-semibold">Service Booking ID - 1239564261565</h2>
        <div className="flex items-center gap-4 mt-2">
          <img
            src="https://via.placeholder.com/100"
            alt="Service"
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <h3 className="text-lg font-semibold">Water Purifier Regular Service</h3>
            <p>Time: 1 Hour 30 Minutes</p>
            <p className="text-blue-600 font-bold mt-1">Rs. 1900</p>
          </div>
        </div>
      </div>

      {/* Timeline and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Timeline */}
        <div className="col-span-2 bg-white shadow rounded p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1 text-green-500">
              {Array(5).fill().map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <a href="#" className="text-blue-500 underline">Write a Review</a>
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-gray-300">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Service Registered Confirmed</h4>
              <p className="text-sm text-gray-600">Water leakage from the purifier tank, slow water flow and unusual sounds.</p>
              <p className="text-xs text-gray-500">Wed, 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Engineer Assigned</h4>
              <p className="text-sm text-gray-600">Jacob Jones</p>
              <button className="mt-1 text-white bg-green-500 px-3 py-1 rounded text-sm">Call Now</button>
              <p className="text-xs text-gray-500 mt-1">Fri 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Service OTP Received</h4>
              <p className="text-sm text-gray-600">8697</p>
              <p className="text-xs text-gray-500">Fri 1st Oct 2025 - 12:30 pm</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Order Summary</h4>
              <p className="text-sm text-gray-600">200002 - PQWN-RO - MEMBRANE 79</p>
              <p className="text-xs text-gray-500">Sat 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Case Closed</h4>
            </li>
          </ol>

          <div className="flex gap-4 mt-6">
            <button className="border px-4 py-2 rounded text-gray-700">Cancel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Chat With Us</button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="bg-white shadow rounded p-6">
          <button className="mb-4 w-full border px-4 py-2 rounded text-blue-600 border-blue-600">
            Download Invoice
          </button>

          {/* Address */}
          <div className="mb-6">
            <h4 className="font-bold mb-2">Service Address Details</h4>
            <p className="text-sm">Eleanor Pena</p>
            <p className="text-sm">4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className="text-sm">Phone Number: +91 9876543210</p>
          </div>

          {/* Price Details */}
          <div className="mb-6">
            <h4 className="font-bold mb-2">Price Details</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex justify-between"><span>Price (1 item)</span><span>₹2499</span></li>
              <li className="flex justify-between text-green-600"><span>Discount</span><span>-₹500</span></li>
              <li className="flex justify-between"><span>Platform Fee</span><span>₹1</span></li>
              <li className="flex justify-between text-green-600"><span>Debit Card Off</span><span>-₹100</span></li>
              <li className="flex justify-between"><span>Delivery Charges</span><span className="text-green-600">Free</span></li>
              <li className="flex justify-between font-bold mt-2"><span>Total Amount</span><span>₹1900</span></li>
            </ul>
            <p className="text-green-600 text-sm mt-2">You total saved on this order ₹700</p>
            <div className="bg-green-100 text-green-800 text-sm px-2 py-1 mt-2 rounded">
              1 Offer Applied On This Order
            </div>
          </div>

          {/* Payment Mode */}
          <div>
            <h4 className="font-bold mb-1">Payment Mode</h4>
            <p className="text-sm">Debit Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTracking;
