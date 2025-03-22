import { useState } from "react";
import Mytask from "./Mytask";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isVisible ? "Hide" : "Show"} Element
      </button>

      {isVisible && (
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <p>This is a toggled element!</p>
        </div>
      )}
      <Mytask/>
    </div>
  );
};

export default ToggleComponent;
