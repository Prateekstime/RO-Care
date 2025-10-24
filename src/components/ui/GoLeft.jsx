import React from 'react'
import LeftArrow from "../../assets/LeftArrow.svg";

function GoLeft() {
  return (
    <div>
              {/* Left Arrow Button */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[30px] w-[30px] 
          rounded-full   shadow-lg transition-all duration-300 hover:bg-blue-400 hover:scale-110 hover:shadow-xl z-10"
              >
                <img
                  src={LeftArrow}
                  alt="Left Arrow"
                  className="w-[15px] mx-auto h-[15px] cursor-pointer"
                />
              </button>
    </div>
  )
}

export default GoLeft
