import React from "react";

function PackageDetails({ packageDetails, onChange, error, totalCost }) {
  return (
    <form className="space-y-4 p-5 bg-white rounded-md shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">Package Details</h1>

      {/* Weight */}
      <div className="flex flex-col w-1/2">
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={packageDetails.weight}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.weight && (
          <p className="text-red-500 text-sm mt-1">{error.weight}</p>
        )}
      </div>

      {/* Rate per kg */}
      <div className="flex flex-col w-1/2">
        <input
          type="number"
          name="perKg"
          placeholder="Rate per kg (INR)"
          value={packageDetails.perKg}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.perKg && (
          <p className="text-red-500 text-sm mt-1">{error.perKg}</p>
        )}
      </div>

      {/* Total Cost */}
      <div className="flex flex-col">
        <h3 className="text-gray-800 font-medium">
          Total Cost: <span className="text-green-600">{totalCost}</span>
        </h3>
      </div>
    </form>
  );
}

export default PackageDetails;
