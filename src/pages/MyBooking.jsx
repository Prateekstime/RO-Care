
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchImg from '../assets/search.svg'
import Mixer from '../assets/mixer.webp'

const MyBooking = () => {
  const [Change, setChange] = useState('')
  const navigate=useNavigate();
  const Orderstatus = ['On the way', 'Delivered', 'Canceled', 'Refunded', 'Completed']
  const OrderTime = ['Last 30 Days', '2024', '2023', 'Older']
  const MyItems = [
    {
      img: Mixer,
      name: "Whole house filter with two replacement filter",
      warranty: "NA",
      price: "₹299",
      status: "On the Way",
      date: "Delivery on March 15,2025",
      routing: "/beforeComplete",
    },

    {
      img: Mixer,
      name: "Gold AMC Plan",
      warranty: "1 Year",
      price: "₹1999",
      status: "Purchased on March 15,2025",
      date: "Amc plan has been purchased",
      routing: "/beforeComplete",
    },

    {
      img: Mixer,
      name: "Whole house filter with two replacement filter",
      warranty: "NA",
      price: "₹299",
      status: "Delivered on March 15,2025",
      date: "Your item has been deliveried",
      routing: "/orderCompleted",
    },

    {
      img: Mixer,
      name: "Whole house filter with two replacement filter",
      warranty: "NA",
      price: "₹299",
      status: "Canceled on March 15,2025",
      date: "Your item has been canceled",
      routing: "/order-cancelled",
    },

    {
      img: Mixer,
      name: "Whole house filter with two replacement filter",
      warranty: "NA",
      price: "₹1999",
      status: "Completed on March 15,2025",
      date: "Your item has been completed",
      routing: "/orderCompleted",
    },

    {
      img: Mixer,
      name: "Whole house filter with two replacement filter",
      warranty: "NA",
      price: "₹1999",
      status: "Refunded on March 15,2025",
      date: "Your item has been refunded",
    },
  ];
   
    const handleChange=(e)=>{
        setChange(e.target.value)
    }
  
    const handleNavigate=(address)=>{
      navigate(address)
    }

  return (
    <>
      <div className="heading flex gap-4 items-center justify-center my-8">
        <div className="w-[40vw] h-[1px] bg-black"></div>
        <h1 className="text-4xl font-bold tracking-wide">My Bookings</h1>
        <div className="w-[40vw] h-[1px] bg-black"></div>
      </div>
      <div className="w-screen h-screen flex overflow-hidden">
        <div className="orderFilter w-[25vw] relative">
          <div className="w-[12vw] h-[55vh] border absolute top-0 left-20 flex flex-col gap-4">
            <div className="orderStatus flex flex-col px-4 pt-4">
              <h1 className="text-lg font-[600] text-wider">Order Status</h1>
              <hr className="w-[56%] my-3 custom-dotted" />
              {Orderstatus.map((items, index) => (
                <label
                  key={index}
                  htmlFor={items}
                  className="flex gap-4 items-center justify-start my-1 w-fit"
                >
                  <input type="checkbox" id={items} className="size-4" />
                  <span className="text-sm font-[600]">{items}</span>
                </label>
              ))}
            </div>
            <div className="orderStatus flex flex-col px-4 py-2">
              <h1 className="text-lg font-[600] text-wider">Order Time</h1>
              <hr className="w-[56%] my-3 custom-dotted" />
              {OrderTime.map((items, index) => (
                <label
                  key={index}
                  htmlFor={items}
                  className="flex gap-4 items-center justify-start my-1 w-fit"
                >
                  <input type="checkbox" id={items} className="size-4" />
                  <span className="text-sm font-[600]">{items}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="myBooking w-[75vw] h-[80vh] flex gap-8 flex-col">
          <label htmlFor="search" className="relative flex">
            <input
              onChange={handleChange}
              type="text"
              value={Change}
              id="search"
              name="search"
              className="w-[80%] h-[6vh] pl-4 pr-10 py-4 rounded-sm border border-[#cccccb] placeholder:text-[#8d8d8c] placeholder:text-sm"
              placeholder="Search your bookings here"
            />
            <img
              src={searchImg}
              alt="search"
              className="absolute opacity-[0.6] right-60 top-3"
            />
          </label>
          <div className="BookedProducts overflow-hidden hide-scrollbar w-[75vw] h-[90vh] pb-5 flex flex-col gap-5">
            {MyItems.map((items, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(items.routing)}
                className=" border w-[80%] min-h-[12vh] flex items-center pl-4 cursor-pointer hover:shadow-md shadow-orange-600 hover:-translate-y-1"
              >
                <div className="rightSide flex gap-4 w-[65%]">
                  <img src={items.img} alt="product" className="w-11" />
                  <div className="productDetails flex flex-col gap-1">
                    <span className="name text-md font-[500] tracking-wide">
                      {items.name}
                    </span>
                    <span className="name text-md text-[#c7c7c5]">
                      Warranty: {items.warranty}
                    </span>
                  </div>
                </div>
                <span className="font-[500] text-md w-[10%]">
                  {items.price}
                </span>

                <div className="leftSide flex flex-col gap-1 w-[30%]">
                  {items.status !== "On the Way" ? (
                    <div className="status flex items-center justify-center gap-2">
                      <div className="p-2 rounded-full bg-red-500"></div>
                      <span className="text-md font-[500] tracking-wide">
                        {items.status}
                      </span>
                    </div>
                  ) : (
                    <span className="status text-md">{items.status}</span>
                  )}
                  <span className="date text-md text-[#c7c7c5]">
                    {items.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBooking