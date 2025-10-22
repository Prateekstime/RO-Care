import React, { useState } from "react";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import productMain from "../../assets/Offer1.png";
import thumb1 from "../../assets/Offer2.png";
import thumb2 from "../../assets/Offer3.png";
import thumb3 from "../../assets/Offer4.png";
import similar1 from "../../assets/Offer5.png";
import similar2 from "../../assets/Offer6.png";
import similar3 from "../../assets/Offer1.png";
import similar4 from "../../assets/Offer2.png";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(productMain);

  const thumbnails = [thumb1, thumb2, thumb3];

  const reviews = [
    {
      name: "You",
      date: "2 Jan, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus. Nullam facilisi pellentesque dictumst.",
      rating: 5,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Robert Fox",
      date: "15 Feb, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus. Nullam facilisi pellentesque dictumst.",
      rating: 4,
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Jenny Wilson",
      date: "30 Mar, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus. Nullam facilisi pellentesque dictumst.",
      rating: 5,
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const similarProducts = [
    {
      id: 1,
      name: "3000 Gallon Replacement Water Filter",
      rating: 4.8,
      price: "₹849.00",
      warranty: "6 Months",
      image: similar1,
    },
    {
      id: 2,
      name: "VYAIR 10'' x 2.5'' Water Filter Cartridge",
      rating: 4.7,
      price: "₹719.00",
      warranty: "6 Months",
      image: similar2,
    },
    {
      id: 3,
      name: "Domestic RO Membrane set of 1",
      rating: 4.9,
      price: "₹499.00",
      warranty: "6 Months",
      image: similar3,
    },
    {
      id: 4,
      name: "EVERPURE Microfilter Pretreatment System",
      rating: 4.92,
      price: "₹699.00",
      warranty: "6 Months",
      image: similar4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Images */}
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Main Product"
            className="w-full max-w-md md:max-w-lg object-contain rounded-md shadow-sm"
          />

          {/* Thumbnails */}
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`Thumbnail ${i}`}
                onClick={() => setSelectedImage(thumb)}
                className={`w-16 h-16 sm:w-20 sm:h-20 cursor-pointer border rounded-md object-contain transition-all ${
                  selectedImage === thumb
                    ? "border-[#4ab29a] scale-105"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-sm">
            <button className="border border-gray-400 px-4 py-2 rounded-md w-full hover:bg-gray-100 transition">
              Add to Cart
            </button>
            <button className="bg-[#4ab29a] text-white px-4 py-2 rounded-md w-full hover:bg-[#3a8e7a] transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side: Details */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Prefilter RO Service Kit Pre-filter Housing Bowl + 2 Pcs. Spun Filter
          </h1>

          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-gray-600 text-sm">(3.2M Reviews)</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-2xl font-bold text-gray-800">₹899.00</p>
            <p className="text-gray-500 flex items-center gap-1">
              <FaCheckCircle className="text-[#4ab29a]" /> Warranty: NA
            </p>
          </div>

          {/* Offers */}
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50 mb-4">
            <h3 className="font-semibold mb-2">Available Offers</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>💳 UPI Offer: Pay using any UPI and get instant off ₹50</li>
              <li>💳 Debit Card Offer: Pay using Debit Card and get ₹100 off</li>
              <li>💳 Credit Card Offer: Pay using Credit Card and get 5% off</li>
              <li>🎁 Free delivery on orders above ₹999</li>
            </ul>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum
              egestas diam volutpat habitasse. Amet mattis ac magna nibh tempor
              in lectus. Magna sagittis egestas vel tincidunt. Nullam facilisi
              pellentesque dictumst. Suspendisse faucibus nunc sit. Tempor massa
              scelerisque risus.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 bg-gray-50"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-contain mb-3"
              />
              <h3 className="text-sm font-medium text-gray-700 mb-1 text-center">
                {product.name}
              </h3>
              <p className="text-center text-gray-500 text-sm mb-1">
                ⭐ {product.rating} | Warranty: {product.warranty}
              </p>
              <p className="text-center font-semibold text-lg text-gray-800 mb-2">
                {product.price}
              </p>
              <NavLink
                to="/buynow"
                className="block text-center bg-[#4ab29a] text-white py-2 rounded-md hover:bg-[#3a8e7a]"
              >
                Buy Now
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
