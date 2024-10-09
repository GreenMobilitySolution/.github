import React, { MouseEventHandler } from 'react';

interface GreenButtonProps {
  handle: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const GreenButton: React.FC<GreenButtonProps> = ({ handle, children }) => {
  return (
    <button
      onClick={handle}
      className="mt-2 bg-green-500 px-4 py-2 rounded-md items-center rounded-3xl text-primary hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
    >
      {children}
    </button>
  );
};

export default GreenButton;