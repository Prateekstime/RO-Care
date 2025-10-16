import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import Offer2 from "../../assets/Offer2.png";

const TrackingCanceled = () => {
  return (
    <div className="px-4 py-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-300 rounded-lg mt-4">
      {/* Left Section */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
        {/* Service Header */}
        <div className="flex items-start gap-4 border-b pb-4 mb-4">
          <img
            src={Offer2}
            alt="RO Service"
            className="w-20 h-20 object-contain border rounded"
          />
          <div>
            <p className="text-sm text-gray-500">Service Booking ID - #1239546251656</p>
            <h3 className="text-lg font-semibold text-gray-800">
              Water Purifier Regular Service
            </h3>
            <p className="text-sm text-gray-600">Time: 1 Hour 30 Minutes</p>
            <p className="text-lg font-semibold mt-1">Rs. 1900</p>
          </div>
        </div>

        {/* Order Status */}
        <div className="border rounded-lg overflow-hidden mb-3">
          <div className="flex justify-between items-center bg-green-50 p-4 border-b">
            <div>
              <p className="font-semibold text-green-700">Order Confirmed</p>
              <p className="text-gray-600 text-sm">Issue: Beeping Sound</p>
            </div>
            <p className="text-gray-500 text-sm">Wed, 1st Oct 2025 - 10:30 am</p>
          </div>

          <div className="flex justify-between items-center bg-red-50 p-4">
            <div>
              <p className="font-semibold text-red-600">Cancelled</p>
              <p className="text-gray-600 text-sm">
                Your Service was cancelled as per your request.
              </p>
            </div>
            <p className="text-gray-500 text-sm">Wed, 1st Oct 2025 - 10:45 am</p>
          </div>
        </div>

        {/* Cancel Reason */}
        <div className="border rounded-lg p-3 text-gray-700 mb-3">
          Cancel Reason: <span className="font-medium">I Ordered Wrong Service</span>
        </div>

        {/* Chat Section */}
        <div className="flex items-center justify-center border rounded-lg py-2 text-gray-700 cursor-pointer hover:bg-gray-50 transition">
          <FiMessageSquare className="mr-2" />
          Chat With Us
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {/* Service Address */}
        <div className="bg-white shadow rounded-2xl p-5">
          <h4 className="font-semibold text-gray-800 mb-2">Service Address Details</h4>
          <div className="border-t border-gray-300 mb-4"></div>
          <p className="font-medium">Eleanor Pena</p>
          <p className="text-sm text-gray-600">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Phone Number: <span className="font-medium">+91 9876543210</span>
          </p>
        </div>

        {/* Price Details */}
        <div className="bg-white shadow rounded-2xl p-5">
          <h4 className="font-semibold text-gray-800 mb-3">Price Details</h4>
          <div className="border-t border-gray-300 mb-4"></div>
          <div className="space-y-1 text-sm text-gray-700">
            <div className="flex justify-between"><p>Price (1 item)</p><p>₹2499</p></div>
            <div className="flex justify-between"><p>Discount</p><p>-₹500</p></div>
            <div className="flex justify-between"><p>Platform Fee</p><p>₹1</p></div>
            <div className="flex justify-between"><p>Debit Card Off</p><p>-₹100</p></div>
            <div className="flex justify-between"><p>Delivery Charges</p><p className="text-green-600">Free</p></div>
          </div>

          <div className="border-t mt-3 pt-2 flex justify-between text-base font-semibold">
            <p>Total Amount</p>
            <p>₹1900</p>
          </div>
          <p className="text-sm text-green-600 mt-1">You saved ₹700 on this order</p>

          <div className="mt-3 p-2 bg-green-50 rounded-md text-sm text-green-700">
            1 Offer Applied: Debit Card Off ₹100
          </div>

          <div className="mt-3 text-sm text-gray-700">
            Payment Mode: <span className="font-medium">Debit Card</span>
          </div>

          <button className="mt-4 w-full border border-gray-300 rounded-md py-2 text-sm font-medium hover:bg-gray-50">
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingCanceled;
