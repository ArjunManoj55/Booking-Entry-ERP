import React from "react";

function Button({ onClick, loading, disabled }) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`px-6 py-2 rounded font-medium transition-all duration-200 text-white ${
        isDisabled
          ? "bg-gray-400 cursor-not-allowed opacity-70"
          : "bg-blue-600 hover:bg-blue-700 active:scale-95 cursor-pointer shadow-md"
      }`}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
}

export default Button;
