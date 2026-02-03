import React from 'react';

function OutPut({ output }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm text-gray-800">
      <span className="font-medium">Output:</span> {output || "Click submit to see output"}
    </div>
  );
}

export default OutPut;
