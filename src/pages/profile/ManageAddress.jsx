import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function ManageAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Office",
      name: "Eleanor Pena",
      phone: "+919876543210",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      id: 2,
      type: "Office",
      name: "Eleanor Pena",
      phone: "+919876543210",
      address: "3891 Ranchview Dr. Richardson, California 62639",
    },
  ]);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">
        Manage Addresses
      </h2>

      {/* Add New Address Button */}
      <div className="border border-gray-300 rounded-md p-3 flex items-center cursor-pointer hover:bg-gray-50">
        <Plus size={18} className="text-blue-600 mr-2" />
        <span className="text-blue-600 font-medium">Add a New Address</span>
      </div>

      {/* Address Cards */}
      {addresses.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
        >
          <div>
            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md mb-1">
              {item.type}
            </span>
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-gray-700 text-sm">{item.phone}</p>
            <p className="text-gray-600 text-sm mt-1">{item.address}</p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-md text-sm hover:bg-blue-50">
              Edit
            </button>
            <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-md text-sm hover:bg-blue-50">
              Share
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
