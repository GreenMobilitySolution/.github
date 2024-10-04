import React from 'react';

const NextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="text-white text-3xl border-2 border-white rounded-full p-2">
      &gt;
    </button>
  );
};

export default NextButton;