import React from 'react';

const ChoiceModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Select Profile</h2>
        <div className="flex flex-col space-y-4">
          <button 
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => onSelect('student')}
          >
            Student
          </button>
          <button 
            className="bg-green-500 text-white py-2 rounded hover:bg-green-700"
            onClick={() => onSelect('hostelOwner')}
          >
            Hostel Owner
          </button>
        </div>
        <button 
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChoiceModal;
