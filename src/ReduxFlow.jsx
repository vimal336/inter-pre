import React from "react";

const ReduxFlowDiagram = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      {/* Title */}
      <h1 className="text-2xl font-bold">React-Redux Data Flow</h1>

      {/* Flow Diagram */}
      <div className="flex items-center space-x-4 text-lg font-semibold">
        <div className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
          React Component
        </div>
        <span className="text-gray-600">→ Dispatch Action →</span>
        <div className="p-2 bg-green-500 text-white rounded-lg shadow-md">
          Reducer
        </div>
        <span className="text-gray-600">→</span>
        <div className="p-2 bg-purple-500 text-white rounded-lg shadow-md">
          Store
        </div>
        <span className="text-gray-600">→</span>
        <div className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
          React Component (Re-Renders)
        </div>
      </div>
    </div>
  );
};

export default ReduxFlowDiagram;
