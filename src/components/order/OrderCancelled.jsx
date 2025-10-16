import React from "react";
import chat from "../../assets/chat.svg";
import file from "../../assets/file.svg";
import Mixer from "../../assets/mixer.webp";
import check from "../../assets/check.svg";
import { Cross } from "lucide-react";

const MyBooking = () => {
  const Timeline = {
    service: {
      date: "28/12/2024",
      time: "06:30 PM",
      status: "Service Registered",
      info: "Issue: Beeping Sound",
    },
    Closed: { date: "30/12/2024", time: "06:30 PM", status: "Cancelled" },
  };

  return (
    <div className="grid grid-cols-5 gap-6 px-6 py-8">
      {/* LEFT SIDE (3 columns) */}
      <div className="col-span-3 flex flex-col">
        {/* Booking Summary */}
        <div className="border-2 p-4 rounded-md border-[#c7c7c5] w-full mb-6 flex items-center justify-start  shadow-inner bg-white">
          <div className="border border-[#c7c7c5] rounded-md p-2 mr-6">
            <img src={Mixer} alt="Mixer" className="size-28 object-contain" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#c7c7c5] text-md">
              Service Booking ID - ID32954621566
            </h3>
            <h1 className="text-lg font-semibold tracking-wide">
              Water Purifier Regular Service
            </h1>
            <h2 className="text-md font-medium tracking-wide">
              Time: 1 Hour 30 Minutes
            </h2>
            <h1 className="text-xl font-semibold text-gray-800">₹1900</h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-2 border-[#c7c7c5] flex flex-col gap-3 mb-6 px-6 py-6 rounded-md shadow-inner bg-white">
          {/* Service Registered */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1 relative bottom-6">
              <span>{Timeline.service.date}</span>
              <span>{Timeline.service.time}</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="p-[10px] rounded-full bg-green-600"></div>
              <div className="h-[11vh] w-[4px] bg-green-600"></div>
            </div>
            <div className="flex flex-col gap-1 relative bottom-6">
              <span className="text-lg font-semibold">
                {Timeline.service.status}
              </span>
              <span className="text-md text-gray-600">
                {Timeline.service.info}
              </span>
            </div>
          </div>

          {/* Closed */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1 relative bottom-2">
              <span>{Timeline.Closed.date}</span>
              <span>{Timeline.Closed.time}</span>
            </div>
            <div className="rounded-full relative bottom-6  h-5 w-5 bg-green-700 opacity-80 p-1 flex items-center justify-center">
              {/* <img src={Cross} alt="" className="size-4 invert" /> */}
              <p className="text-white mb-1">x</p>
            </div>
            <div className="flex flex-col gap-1 relative bottom-4">
              <span className="text-lg font-semibold text-red-700">
                {Timeline.Closed.status}
              </span>
            </div>
          </div>
        </div>

        {/* Cancel Reason */}
        <div className="border-2 border-[#c7c7c5] rounded-md w-[85%] h-[8vh] mb-4 px-4 flex items-center shadow-inner bg-white">
          <h1 className="text-lg font-semibold">
            Cancel Reason: I Ordered Wrong Service
          </h1>
        </div>

        {/* Chat */}
        <div className="border-2 border-[#c7c7c5] rounded-md w-[85%] h-[8vh] flex gap-2 items-center px-4 shadow-inner bg-white">
          <img src={chat} alt="" className="size-5 cursor-pointer" />
          <span className="text-lg tracking-wide font-medium cursor-pointer">
            Chat with us
          </span>
        </div>
      </div>

      {/* RIGHT SIDE (2 columns) */}
      <div className="col-span-2 flex flex-col items-center">
       
        {/* Service Address */}
        <div className="border-2 border-[#c7c7c5] rounded-md w-[75%] mb-4 shadow-inner bg-white flex px-4 py-4 flex-col gap-3">
          <span className="text-xl font-semibold">
            Service Address Details
          </span>
          <hr className="bg-[#a5a3a3] h-[2px]" />
          <div className="flex flex-col">
            <span className="text-[1.1rem] font-semibold">Eleanor Pena</span>
            <span className="text-[1rem] font-medium">
              4517 Washington Ave. Manchester,
            </span>
            <span className="text-[1rem] font-medium">Kentucky 39495</span>
            <span className="text-[1rem] font-medium">
              Phone Number: +919876543210
            </span>
          </div>
        </div>

        {/* Price Details */}
        <div className="border-2 border-[#c7c7c5] rounded-md w-[75%] mb-4 shadow-inner bg-white flex flex-col px-4 py-6 gap-2">
          <span className="text-xl font-semibold">Price Details</span>
          <hr className="bg-[#a5a3a3] h-[2px]" />

          {[
            ["Price (1 Items)", "₹2499"],
            ["Discount", "-₹500", true],
            ["Platform Fee", "₹1"],
            ["Debit Card Off", "-₹100", true],
            ["Delivery Charges", "₹100 Free"],
          ].map(([label, value, highlight], i) => (
            <div
              key={i}
              className="flex items-center justify-between text-[1.1rem]"
            >
              <span
                className={` ${
                  highlight ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {label}
              </span>
              <span
                className={` ${
                  highlight ? "text-[#7EC1B1]" : "text-[#8d8d8c]"
                }`}
              >
                {value}
              </span>
            </div>
          ))}

          <hr className="h-[2px] my-2" />
          <div className="flex items-center justify-between text-lg font-semibold text-[#242423]">
            <span>Total Amount</span>
            <span>₹1900</span>
          </div>

          <hr className="h-[2px] my-2" />
          <span className="text-sm text-[#7EC1B1] ">
            You saved ₹700 on this order
          </span>

          <hr className="h-[2px] my-2" />
          <div className="flex gap-2 items-center">
            <span className="w-10 h-10 bg-[#7EC1B1]  text-white text-lg rounded-full flex justify-center items-center">
              %
            </span>
            <div className="flex flex-col">
              <span className="text-[1rem]  text-[#242423]">
                1 Offer Applied On This Order
              </span>
              <span className="text-[0.85rem] text-[#1d1d1c] ">
                Debit Card Off ₹100
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 border-[#c7c7c5] rounded-md w-[75%] h-[8vh] mb-4 shadow-inner bg-white flex items-center px-4 cursor-pointer">
          <span className="text-lg text-[#8d8d8c] ">
            Payment Mode : Debit Card
          </span>
        </div>

        <div className="border-2 border-[#c7c7c5] rounded-md w-[75%] h-[8vh] mb-4 shadow-inner bg-white flex items-center px-4 cursor-pointer">
             <img src={file} alt="" className="opacity-60 cursor-pointer" />
          <span className="text-lg text-[#8d8d8c] ">
            Download Invoice
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
