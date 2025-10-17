import React from 'react';
import amc from "../../assets/AMC.png"

const MyAMCPlans = () => {
  const plans = [
    {
      id: 1,
      planName: "Gold AMC Plan",
      status: "Active",
      planId: "AMCGOLD23612422",
      price: "₹1999.00",
      validity: "1 Year",
      purchasedDate: "10 March, 2023",
      expireDate: "10 March, 2024",
      services: [
        { name: "Plan Service One", status: "Done" },
        { name: "Plan Service Two", status: "Done" }
      ],
      includes: ["Service", "Filter", "Membrane", "Electric Parts", "Faulty Parts"]
    },
    {
      id: 2,
      planName: "Gold AMC Plan",
      status: "Expired",
      planId: "AMCGOLD23612421",
      price: "₹1999.00",
      validity: "1 Year",
      purchasedDate: "10 March, 2023",
      expireDate: "10 March, 2024",
      services: [
        { name: "Plan Service One", status: "Done" },
        { name: "Plan Service Two", status: "Done" }
      ],
      includes: ["Service", "Filter", "Membrane", "Electric Parts", "Faulty Parts"]
    },
    {
      id: 3,
      planName: "Gold AMC Plan",
      status: "Expired",
      planId: "AMCGOLD23612401",
      price: "₹1999.00",
      validity: "1 Year",
      purchasedDate: "10 March, 2023",
      expireDate: "10 March, 2024",
      services: [
        { name: "Plan Service One", status: "Done" },
        { name: "Plan Service Two", status: "Done" }
      ],
      includes: ["Service", "Filter", "Membrane", "Electric Parts", "Faulty Parts"]
    }
  ];

  return (
    <div className="max-w-4xl   flex gap-4">
      {plans.map((plan) => (
        <div key={plan.id} className="bg-white  border border-gray-100 rounded-md shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-blue-50  border-b border-gray-200">
            <img src={amc} alt="amc-plan"
            className='w-full bg-gray-100
            ' />
          </div>

          {/* Plan Details */}
          <div className="p-2 bg-gray-100">
            {/* Plan Name and Status */}
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{plan.planName}</h4>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                plan.status === "Active" 
                  ? " text-green-600" 
                  : " text-red-600"
              }`}>
                {plan.status}
              </span>
            </div>

            {/* Plan ID */}
            <div className='flex justify-between mb-4 '>
              <p className='font-medium '>  Plan ID:</p>
            <p className="text-gray-600  text-sm ">
           {plan.planId}
            </p>

            </div>

            {/* Price and Validity */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-800">{plan.price}</span>
              <span className="text-gray-700">Validity: {plan.validity}</span>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-sm text-gray-800">Purchased Date:</p>
                <p className="text-sm text-gray-800">Expire Date:</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-medium">{plan.purchasedDate}</p>
                <p className="text-gray-700 text-sm font-medium">{plan.expireDate}</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-3">
              {plan.services.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">{service.name}</span>
                  <span className="px-2 py-1  text-green-600 text-xs  font-medium">
                    {service.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Services and Products Include */}
            <div>
              <h5 className="text-md text-center whitespace-nowrap font-semibold text-gray-800 mb-3">
                Services and Products Include
              </h5>
              <div className="grid grid-cols-1 gap-1">
                {plan.includes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAMCPlans;