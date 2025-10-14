import React from "react";
import { AiFillStar } from "react-icons/ai";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import Offer6 from "../../assets/Offer6.png";

const SpareParts = () => {
  const products = [
    {
      id: 1,
      name: "Whole house filter with two replacement filters",
      price: "₹899.00",
      rating: "4.8",
      image:  Offer2,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 2,
      name: "3000 Gallon Replacement Water Filter",
      price: "₹869.00",
      rating: "4.8",
      image: Offer2,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 3,
      name: "V'AIR 10” x 2.5” Water Filter Cartridge with 6 Month Warranty",
      price: "₹799.00",
      rating: "4.8",
      image: Offer3,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 4,
      name: "Domestic RO Membrane set of 1 with 6 Moth Warranty",
      price: "₹799.00",
      rating: "4.8",
      image: Offer4,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 5,
      name: "KENT Gold Spare Kit Gold Pleated Filter Cartridge",
      price: "₹899.00",
      rating: "4.8",
      image: Offer5,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 6,
      name: "KENT Automated Water Softener, 3000 LPH",
      price: "₹899.00",
      rating: "4.8",
      image: Offer6,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 7,
      name: "EVERPURE Microfilter Pretreatment System",
      price: "₹649.00",
      rating: "4.8",
      image: Offer4,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
    {
      id: 8,
      name: "Kent Complete Filter Replacement",
      price: "₹849.00",
      rating: "4.8",
      image: Offer2,
      description:
        "This is internal part in Water Purifier replaceable easily. With 6 Month Warranty",
    },
  ];

  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-center mb-2">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <h2 className="mx-4 text-2xl font-semibold text-gray-800">
          Spare Parts
        </h2>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Filter Sidebar */}
        <aside className="md:col-span-1 space-y-6">
          {/* Brands */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Products Brands
            </h3>
            <div className="space-y-1 text-sm text-gray-700">
              {[
                "KENT",
                "Pure It",
                "Livpure",
                "Eureka FORBES",
                "BLUE MOUNT",
              ].map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Sort By</h3>
            <div className="space-y-1 text-sm text-gray-700">
              {[
                "Popular",
                "Price Low - High",
                "Price High - Low",
                "Latest",
              ].map((sort) => (
                <label key={sort} className="flex items-center gap-2">
                  <input type="radio" name="sort" className="accent-blue-600" />
                  {sort}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Price</h3>
            <input
              type="range"
              min="99"
              max="9999"
              className="w-full accent-blue-600"
            />
            <p className="text-sm text-gray-700 mt-1">₹99 - ₹9999</p>
          </div>

          {/* Offers */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Offers</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li> UPI off ₹50</li>
              <li> Debit Card Off ₹100</li>
              <li> Credit Card Off 5%</li>
            </ul>
          </div>
          {/* Customer Reviews */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              Customer Reviews
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              {/* Review 1 */}
              <div className="border border-gray-200 p-2 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Ravi Kumar</p>
                  <div className="flex items-center text-yellow-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Great quality product! Easy to replace and works perfectly.
                </p>
              </div>

              {/* Review 2 */}
              <div className="border border-gray-200 p-2 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Sneha Patel</p>
                  <div className="flex items-center text-yellow-500 text-xs">
                    {[...Array(4)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Good product, delivery was fast. Satisfied with the service!
                </p>
              </div>

              {/* Review 3 */}
              <div className="border border-gray-200 p-2 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Amit Sharma</p>
                  <div className="flex items-center text-yellow-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Genuine spare part, fits perfectly. Highly recommend!
                </p>
              </div>
            </div>
          </div>

          {/* Promise */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Techno RO Promise
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✔ Verified Professionals</li>
              <li>✔ Hassle Free Booking</li>
              <li>✔ Transparent Pricing</li>
              <li>✔ Genuine Spare Parts</li>
            </ul>
          </div>
        </aside>

        {/* Right Products Grid */}
        <main className="md:col-span-3">
          <h2 className="text-lg font-semibold mb-4">Spare Parts</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <h4 className="font-medium text-gray-800 text-sm line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {product.description}
                </p>
                <p className="font-semibold mt-2">{product.price}</p>
                <p className="text-xs text-green-600 mt-1 font-medium">
                  Best offer
                </p>

                <div className="flex items-center justify-between mt-2 text-sm">
                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    <AiFillStar className="text-yellow-500" />
                    {product.rating}
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 border border-gray-300 rounded-md py-1 text-sm hover:bg-gray-50">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-green-500 text-white rounded-md py-1 text-sm hover:bg-green-600">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SpareParts;
