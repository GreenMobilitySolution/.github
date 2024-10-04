import React, { useState } from 'react';

interface BannerIdentifierProps {
  index: number;
}

function BannerIdentifier({ index }: BannerIdentifierProps) {
  const [currentBanner, setCurrentBanner] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <div
      onClick={() => handleClick(index)}
      className={`${currentBanner === index ? 'w-[8px] h-[8px] bg-grey2' : 'w-[5px] h-[5px] bg-grey1'} rounded-full cursor-pointer`}
    ></div>
  );
}

export default BannerIdentifier;