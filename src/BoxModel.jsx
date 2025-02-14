import { useState } from "react";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded shadow-md relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <h2 className="text-xl font-bold">Modal Title</h2>
            <p className="mt-2">This is a sample modal.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
