import React from "react";
import { useNavigate } from "react-router-dom";
import filterImg from "../../assets/product_1702_1_thumb.webp"; 

const orders = [
  {
    id: 1,
    title: "Whole house filter with two replacement filter wit 6 Month Warranty",
    price: "Rs. 1900",
    delivery: "Delivery by Sun Jul 31",
    status: "On the way",
    statusColor: "text-blue-600",
    message: "Your item will be delivered tomorrow 11 March 2025",
    image: filterImg,
  },
  {
    id: 2,
    title: "Whole house filter with two replacement filter wit 6 Month Warranty",
    price: "Rs. 1900",
    delivery: "Delivery by Sun Jul 31",
    status: "Delivered on Jan 21, 2025",
    statusColor: "text-green-600",
    message: "Your item has been delivered",
    link: "Rate & Review Product",
    image: filterImg,
  },
  {
    id: 3,
    title: "Whole house filter with two replacement filter wit 6 Month Warranty",
    price: "Rs. 1900",
    delivery: "Delivery by Sun Jul 31",
    status: "Cancelled on Jan 21, 2025",
    statusColor: "text-red-600",
    message: "As per your request, your item has been cancelled",
    image: filterImg,
  },
  {
    id: 4,
    title: "Whole house filter with two replacement filter wit 6 Month Warranty",
    price: "Rs. 1900",
    delivery: "Delivery by Sun Jul 31",
    status: "Refunded on Jan 21, 2025",
    statusColor: "text-red-600",
    message: "Money has been refunded.",
    image: filterImg,
  },
  {
    id: 5,
    title: "Whole house filter with two replacement filter wit 6 Month Warranty",
    price: "Rs. 1900",
    delivery: "Delivery by Sun Jul 31",
    status: "Delivered on Jan 21, 2025",
    statusColor: "text-green-600",
    message: "Your item has been delivered",
    link: "Rate & Review Product",
    image: filterImg,
  },
];

export default function MyOrders() {
    const navigate = useNavigate();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        My Orders
      </h2>

      {orders.map((order) => (
        <div
        onClick={()=>{navigate("/order-detail-invoice")}}
          key={order.id}
          className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-md shadow-sm p-4 bg-white"
        >
          {/* Product Section */}
          <div className="flex items-start gap-4">
            <img
              src={order.image}
              alt="product"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {order.title}
              </h3>
              <p className="font-semibold text-gray-800">{order.price}</p>
              <p className="text-xs text-gray-500">{order.delivery}</p>
            </div>
          </div>

          {/* Status Section */}
          <div className="mt-3 md:mt-0 text-sm text-gray-800">
            <p
              className={`font-semibold flex items-center gap-2 ${order.statusColor}`}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  order.statusColor.includes("green")
                    ? "bg-green-600"
                    : order.statusColor.includes("blue")
                    ? "bg-blue-600"
                    : "bg-red-600"
                }`}
              ></span>
              {order.status}
            </p>
            <p className="text-gray-500">{order.message}</p>
            {order.link && (
              <button className="text-blue-600 font-medium text-xs mt-1 hover:underline">
                {order.link}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
