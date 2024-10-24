import { useState } from 'react';
import PreviousButton from '../Buttons/PreviousButton';
import NextButton from '../Buttons/NextButton';
import { updates } from '../../../Database/updates';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? updates.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= updates.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <div className="flex flex-col items-center justify-center px-10 py-5 pb-10 bg-gradient-to-r from-green-400 via-green-300 to-green-500">
      <h1 className="text-2xl font-medium text-white mb-5">Ibigezweho</h1> 
      <div className="w-full flex items-center justify-center gap-5">
        <PreviousButton onClick={handlePrevious} />
        <div className="flex gap-5">
          {updates.slice(currentIndex, currentIndex + 2).map((update, index) => (
            <div key={index} className="w-full max-w-md p-5 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-medium text-primary mb-2">{update.title}</h2> 
              <p className="text-gray-700 mb-2 text-s">{update.description}</p> 
              <p className="text-gray-500 text-s">{update.date}</p> 
            </div>
          ))}
        </div>
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default HeroSection;