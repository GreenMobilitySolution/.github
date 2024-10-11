import React, { MouseEventHandler } from 'react';

interface GreenButtonProps {
  handle: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

const GreenButton: React.FC<GreenButtonProps> = ({ handle, children, disabled = false }) => {
  return (
    <button
      onClick={handle}
      disabled={disabled}
      className={`mt-2 px-4 py-2 rounded-md items-center rounded-3xl text-primary ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500'
      }`}
    >
      {children}
    </button>
  );
};

export default GreenButton;