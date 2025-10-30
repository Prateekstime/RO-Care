import React from 'react'
import RightArrow from "../../assets/rightArrow.svg";

export default function GoRightButton() {
  return (
    <div>
       <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[40px] w-[40px] 
    rounded-full shadow-lg transition-all duration-300 hover:bg-blue-400 hover:scale-110 hover:shadow-xl z-10"
        >
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-[15px] mx-auto h-[15px] cursor-pointer"
          />
        </button>
    </div>
  )
}
