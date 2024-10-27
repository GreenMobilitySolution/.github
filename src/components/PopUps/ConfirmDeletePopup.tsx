import React, { useState } from 'react';

interface ConfirmDeletePopupProps {
  trigger: React.ReactNode;
  title: string;
  body: string;
  onSubmit: () => void;
}

const ConfirmDeletePopup: React.FC<ConfirmDeletePopupProps> = ({ trigger, title, body, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    onSubmit();
    handleClose();
  };

  return (
    <>
      <div onClick={handleOpen}>{trigger}</div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{body}</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDeletePopup;