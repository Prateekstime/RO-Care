import { useState } from "react";
import { Heart } from "lucide-react";
import Quality from "../assets/Quality.png";
import Customer from "../assets/Customer.png";
import { FaRupeeSign } from "react-icons/fa";
import BlueStar from "../assets/BlueStar.png";
import BuyNowImg from "../assets/BuyNow.png";
import MapPin from "../assets/MapPin.png";
import Offer1 from "../assets/Offer1.png";
import Offer2 from "../assets/Offer2.png";
import Offer3 from "../assets/Offer3.png";
import Offer4 from "../assets/Offer4.png";
import Offer5 from "../assets/Offer5.png";
import Offer6 from "../assets/Offer6.png";
import { NavLink } from "react-router-dom";

const BuyNow = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(3);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const ratings = [
    { star: 5, value: 0.2 },
    { star: 4, value: 0.4 },
    { star: 3, value: 0.6 },
    { star: 2, value: 0.8 },
    { star: 1, value: 1 },
  ];

  const products = [
    { img: Offer1, title: "Whole House Filter with Two Replacement Filters" },
    { img: Offer2, title: "3000 Gallon Replacement Water Filter" },
    { img: Offer3, title: 'VYAIR 10" x 2.5" Water Filter Cartridge' },
    { img: Offer4, title: "Domestic RO Membrane Set of 1" },
    { img: Offer5, title: "EVERPURE Microfilter Pretreatment System" },
    { img: Offer6, title: "Kent Complete Filter Replacement" },
    { img: Offer2, title: "Kent Automated Water Softener, 3000 LPH" },
  ];

  const reviews = [
    {
      name: "Devon Lane",
      date: "24 Dec, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4,
    },
    {
      name: "Eleanor Pena",
      date: "20 Jul, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 5,
    },
    {
      name: "Jane Cooper",
      date: "15 Jan, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col gap-y-10">
      {/* Main Body */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="lg:w-2/5 w-full flex flex-col items-center">
          <div className="w-full max-w-[400px] border border-gray-300 rounded-lg relative overflow-hidden">
            {/* Heart Icon */}
            <button
              onClick={() => setLiked(!liked)}
              className={`absolute top-3 right-3 p-2 rounded-full border transition-all duration-300 hover:bg-gray-200 ${
                liked ? "border-red-500" : "border-gray-300"
              }`}
            >
              <Heart
                className="w-5 h-5"
                style={{
                  color: liked ? "red" : "gray",
                  fill: liked ? "red" : "none",
                }}
              />
            </button>

            {/* Product Image */}
            <div className="p-4 flex justify-center items-center">
              <img
                src={BuyNowImg}
                alt="Product"
                className="w-[80%] h-[80%] object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center space-x-2 pb-4">
              {[Offer1, BuyNowImg, Offer3].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Small ${index}`}
                  className="w-12 h-12 rounded-md object-cover border"
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full max-w-[400px] gap-4 mt-5">
            <NavLink to="/cart" className="flex-1">
              <button className="w-full px-4 py-2 text-[#66b3a1] rounded-lg border border-[#66b3a1] transition hover:bg-[#66b3a111]">
                Add to Cart
              </button>
            </NavLink>
            <button className="flex-1 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg hover:bg-[#66b3a1] transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full gap-8">
          {/* Product Description */}
          <div className="w-full bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Prefilter RO Service Kit Pre-filter Housing Bowl
            </h2>
            <p className="text-sm mb-4 text-gray-700">
              + 2 Pcs. Spun Filter + SS Inlet Ball Valveeflon 1/4" + 3 Meter RO
              Pipe + 2 Ro Tap + 1/4" Connector For Water Purifier, Solid Filter
              Cartridge (5, Pack of 5)
            </p>

            {/* Ratings */}
            <div className="flex items-center mb-3">
              <img src={BlueStar} alt="star" className="w-5 h-5" />
              <span className="ml-1 font-semibold">4.96</span>
              <span className="ml-2 text-gray-500 text-sm">(2.3M Reviews)</span>
            </div>

            {/* Price and Warranty */}
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-2xl font-semibold text-gray-800">₹899.00</p>
              <p className="text-gray-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                Warranty: NA
              </p>
            </div>

            {/* Quantity, Availability, Share */}
            <div className="flex flex-wrap lg:flex-nowrap gap-5 mt-6">
              {/* Quantity */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleDecrement}
                  className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-xl text-white"
                >
                  -
                </button>
                <div className="w-12 h-10 flex items-center justify-center border border-gray-300 text-xl font-semibold">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-xl text-white"
                >
                  +
                </button>
              </div>

              {/* Availability */}
              <div className="flex-1 flex items-center justify-between border-b border-gray-400">
                <div className="flex items-center space-x-2">
                  <img src={MapPin} alt="Map Pin" className="w-5 h-5" />
                  <span className="text-sm text-gray-700">
                    Check Availability
                  </span>
                </div>
                <button className="text-[#7EC1B1] text-sm font-medium">
                  Check
                </button>
              </div>

              {/* Share */}
              <button className="border border-[#7EC1B1] text-[#7EC1B1] rounded-lg px-4 py-2 hover:bg-[#7ec1b111] transition">
                Share
              </button>
            </div>
          </div>

          {/* Offers */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Available Offers</h3>
            <div className="border-t border-dashed border-gray-300 mb-4"></div>

            {[
              { title: "UPI Off ₹50", desc: "Pay using any UPI and get ₹50 off" },
              {
                title: "Debit Card Off ₹100",
                desc: "Pay using Debit Card and get ₹100 off",
              },
              {
                title: "Credit Card Off 5%",
                desc: "Pay using Credit Card and get 5% off",
              },
            ].map((offer, index) => (
              <div key={index} className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-white text-lg font-semibold">
                  %
                </div>
                <div>
                  <p className="font-medium">{offer.title}</p>
                  <p className="text-sm text-gray-600">{offer.desc}</p>
                </div>
              </div>
            ))}
            <button className="text-[#7EC1B1] hover:text-lg transition-all">
              View More Offers
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <div className="border-t border-dashed border-gray-300 mb-4"></div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Lorem ipsum dolor sit amet consectetur. Netus bibendum duis
                lorem ullamcorper id. Amet mattis eu fringilla nibh interdum.
              </li>
              <li>
                Pharetra sit in risus felis dictum enim suspendisse sodales.
                Lobortis aliquam morbi tortor aliquet pretium eu.
              </li>
              <li>
                Eget sed ultrices mauris aliquam sed senectus quam sed
                imperdiet. Arcu enim est facilisis consectetur.
              </li>
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <div className="border-t border-dashed border-gray-300 mb-4"></div>

            {/* Rating Summary */}
            <div className="max-w-sm mb-4">
              <div className="flex items-center gap-3 mb-2">
                <img src={BlueStar} alt="rating" className="w-5 h-5" />
                <span className="text-lg font-semibold">4.96</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">2.3M Reviews</p>

              {ratings.map((r) => (
                <div key={r.star} className="flex items-center mb-2">
                  <span className="text-[#7EC1B1] text-lg">★</span>
                  <span className="ml-1 text-sm">{r.star}</span>
                  <div className="flex-1 ml-3 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-[#7EC1B1] rounded-full"
                      style={{ width: `${r.value * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Individual Reviews */}
            {reviews.map((review, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-3">
                    <img
                      src={Customer}
                      alt="Customer"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < review.rating
                            ? "text-[#7EC1B1]"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.review}</p>
              </div>
            ))}

            <button className="text-[#7EC1B1] hover:text-lg transition-all">
              View More Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {products.map((offer, index) => (
            <div
              key={index}
              className="flex-none w-[250px] border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center"
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="w-[160px] h-[160px] object-contain mb-3 border border-gray-200 rounded-lg p-2"
              />
              <h3 className="text-center text-sm font-medium mb-1">
                {offer.title}
              </h3>
              <div className="flex items-center text-gray-600 text-xs mb-1">
                <img src={BlueStar} alt="star" className="w-4 h-4 mr-1" />
                <span>4.81 (1.9M Reviews)</span>
              </div>
              <p className="text-[#333] text-sm font-semibold mb-2">₹299.00</p>
              <button className="px-4 py-2 bg-[#7EC1B1] text-white rounded-lg text-sm hover:bg-[#66b3a1]">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
