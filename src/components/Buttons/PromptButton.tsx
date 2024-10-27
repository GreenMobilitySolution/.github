import React from 'react';

interface PromptButtonProps {
  label: string;
  onClick: () => void;
}

const PromptButton: React.FC<PromptButtonProps> = ({ label, onClick }) => {
  return (
    <div className="border border-gray-400 rounded-lg p-2 hover:bg-green-100 hover:border-green-500">
      <button className="w-full h-full py-2 px-4 rounded-lg" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default PromptButton;