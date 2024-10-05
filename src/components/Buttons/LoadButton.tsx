import React, { MouseEventHandler } from 'react';

interface LoadButtonProps {
  handle: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const LoadButton: React.FC<LoadButtonProps> = ({ handle, children }) => {
  return (
    <button
      onClick={handle}
      className="w-[250px] flex justify-center gap-x-3 items-center rounded-3xl min-h-[50px] ml-1 text-primary border border-primary hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default LoadButton;