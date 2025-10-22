import React from "react";
import fav1 from '../assets/product_1732_1_thumb.webp'
import fav2 from '../assets/product_415_1_thumb.webp'


const FavouriteItems = () => {
  const favItemsList = [
    {
      id: 1,
      img: fav1
    },
    {
      id: 2,
     img:fav2,   },
    {
      id: 3,
      img:fav2,     },
    {
      id: 4,
      img:fav1,    },
    {
      id: 5,
      img:fav2,   },
    {
      id: 6,
       img:fav1,   },
    {
      id: 7,
       img:fav2,    },
    {
      id: 8,
      img:fav1,     },
  ];

  return (
    <div className="max-w-[1040px] py-2  ">
   
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2">
        {favItemsList.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col border border-[#CACACA] rounded-2xl p-2 items-center bg-white hover:shadow-md transition-all duration-200"
          >
            {/* Heart Icon */}
            <div className="absolute top-3 right-3 cursor-pointer  rounded-full p-1.5 border">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7579 1.41452C17.3097 0.966073 16.7775 0.610337 16.1917 0.367629C15.606 0.124922 14.9781 0 14.3441 0C13.71 0 13.0822 0.124922 12.4965 0.367629C11.9107 0.610337 11.3785 0.966073 10.9303 1.41452L10 2.34476L9.06979 1.41452C8.16439 0.509117 6.93641 0.0004693 5.65598 0.000469309C4.37555 0.000469319 3.14757 0.509117 2.24217 1.41452C1.33677 2.31992 0.828125 3.5479 0.828125 4.82833C0.828125 6.10875 1.33677 7.33674 2.24217 8.24214L3.17241 9.17238L10 16L16.8277 9.17238L17.7579 8.24214C18.2063 7.79391 18.5621 7.26171 18.8048 6.67596C19.0475 6.0902 19.1724 5.46237 19.1724 4.82833C19.1724 4.19428 19.0475 3.56645 18.8048 2.9807C18.5621 2.39494 18.2063 1.86275 17.7579 1.41452Z"
                  fill="#C17E7F"
                />
              </svg>
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt="Favourite"
              className="w-full h-[160px] object-cover mb-4"
            />

            {/* Info */}
            <div className="flex flex-col items-center text-center space-y-1">
              <p className="text-[14px] tracking-tight text-left font-semibold">
                Whole house filter with two replacement filters
              </p>

             

              <p className=" tracking-tight text-left text-[12px]">
                This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty
              
              </p>
              <p className="font-medium   w-full text-left text-[16px]">₹299.00</p>

<div className="flex text-xs gap-2">

              <button className=" rounded-md border border-gray-600 px-3 py-2 mt-3 hover:bg-[#6BB09F] transition">
                Add to Cart
              </button>
               <button className="bg-[#7EC1B1] text-white rounded-lg px-3 py-2 mt-3 hover:bg-[#6BB09F] transition">
                Buy Now
              </button>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteItems;
