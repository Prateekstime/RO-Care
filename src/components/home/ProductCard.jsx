import React, { useState, useEffect } from 'react'
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import Offer6 from "../../assets/Offer6.png";
import GoRightButton from '../ui/GoRightButton';
import GoLeft from '../ui/GoLeft';

function ProductCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const productData = [
    {
      id: 1,
      image: Offer1,
      title: "Great Deals on Branded Spare Parts",
       price: 4499,
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: 2,
      image: Offer2,
       price: 2499,
      title: "20% Off on Microfiber Water Cartridge Filter",
     
    },
    {
      id: 3,
      image: Offer3,
      price: 1999,
      title: "10% Off on Pre-filter Housing",
     
    },
    {
      id: 4,
      image: Offer4,
      price: 999,
      textColor: "text-pink-900",
      title: "20% Off on Microfiber Water Softener",
  
    },
    {
      id: 5,
      image: Offer5,
      price: 1599,
     
      title: "15% Off on Carbon Block Filter",
      
    },
    {
      id: 6,
      image: Offer6,
      price: 2999,   
     
      title: "25% Off on Domestic RO Membrane",
    
    }
  ];
  const extendedProductData = [...productData, ...productData, ...productData];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
     
        if (newIndex >= productData.length * 2) {
          return productData.length;
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [productData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= productData.length * 2 ? productData.length : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? productData.length * 2 - 1 : newIndex;
    });
  };

  const getVisibleProducts = () => {
    return extendedProductData.slice(currentIndex, currentIndex + visibleCards);
  };

  // Calculate display index for dots
  const getDisplayIndex = () => {
    return currentIndex % productData.length;
  };

  return (
    <div className="relative w-full py-4">
  
      <div className="flex justify-between gap-4 overflow-hidden">
           <button className='relative left-2'
            onClick={prevSlide}>
            <GoLeft  />
      </button>
      <div className='flex gap-4 mx-6'>

        {getVisibleProducts().map((product, index) => (
          <div
            key={`${product.id}-${currentIndex}-${index}`}
            onClick={() => handleCardClick(product.id)}
            className={`flex-1 bg-gradient-to-b from-blue-100 via-white to-blue-50  rounded-[16px]   border
             flex flex-col gap-[16px]   transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-gray-600 cursor-pointer`}
          >
            <div className='p-2'>

            <img
              src={product.image}
              alt="Offer"
              className="w-full sm:h-[100px] object-contain  rounded-md transition-transform duration-300 hover:scale-105"
            />
            </div>
            <div className='bg-gray-300 p-4 rounded-2xl rounded-t-none  '>

            <div className="flex flex-col justify-center  border-t border-b">
              <p className={`text-sm text-gray-600 font-serif text-start h-[40px] `}>
                {product.title}
              </p>
             
               

            </div>
            <div>
                <p className={`text-sm text-gray-600 font-serif text-start h-[4px] `}>
                ₹{product.price}
              </p>
            </div>
            <div className="flex justify-center pt-3">
              <button 
                onClick={(e) => handleBuyNowClick(e, product.id)}
                className={`w-[100px] py-2 ${product.buttonColor} text-white bg-blue-600 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105`}
              >
                Buy Now
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
       <button className='relative right-2'
      onClick={nextSlide} >
      <GoRightButton />
    </button>
      </div>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center gap-2 mt-6">
        {productData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + productData.length)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === getDisplayIndex() 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default ProductCard;