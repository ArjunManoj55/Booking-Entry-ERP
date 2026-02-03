import React from "react";

function ReceiverDetails({ receiverDetails, onChange, error }) {
  return (
    <form className="space-y-5 p-5 bg-white rounded-md shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">Receiver Details</h1>

      {/* Full Name */}
      <div className="flex flex-col">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={receiverDetails.fullName}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700"
        />
        {error.fullName && (
          <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col">
        <textarea
          name="address"
          placeholder="Address"
          value={receiverDetails.address}
          onChange={onChange}
          className="px-3 py-2 border border-gray-200 rounded-md focus:ring-0 focus:outline-none text-gray-700 resize-none"
          rows={3}
        ></textarea>
        {error.address && (
          <p className="text-red-500 text-sm mt-1">{error.address}</p>
        )}
      </div>
    </form>
  );
}

export default ReceiverDetails;
