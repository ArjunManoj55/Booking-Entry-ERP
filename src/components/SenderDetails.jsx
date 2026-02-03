import React from "react";

function SenderDetails({ senderDetails, onChange, error }) {
  return (
    <form className="space-y-4 p-5 bg-white rounded-md shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">Sender Details</h1>

      {/* Full Name */}
      <div className="flex flex-col">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={senderDetails.fullName}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.fullName && (
          <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
        )}
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col">
        <input
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={senderDetails.mobileNumber}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">{error.mobileNumber}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={senderDetails.email}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.email && (
          <p className="text-red-500 text-sm mt-1">{error.email}</p>
        )}
      </div>
    </form>
  );
}

export default SenderDetails;
