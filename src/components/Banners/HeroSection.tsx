import React, { useState } from 'react';
import PreviousButton from '../Buttons/PreviousButton';
import NextButton from '../Buttons/NextButton';

const HeroSection = () => {
  const updates = [
    {
      title: 'New Route Added',
      description: 'We have added a new route from Kigali to Musanze. Book your tickets now!',
      date: '2023-10-01',
    },
    {
      title: 'System Maintenance',
      description: 'Scheduled maintenance will occur on 2023-10-05 from 12:00 AM to 4:00 AM. Please plan your trips accordingly.',
      date: '2023-10-03',
    },
    {
      title: 'Special Discount',
      description: 'Enjoy a 20% discount on all bookings made this month!',
      date: '2023-10-10',
    },
    {
      title: 'New Bus Added',
      description: 'We have added a new bus to our fleet. Enjoy a comfortable ride!',
      date: '2023-10-12',
    },
    {
      title: 'Route Update',
      description: 'The route from Kigali to Butare has been updated. Check the new schedule!',
      date: '2023-10-15',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? updates.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= updates.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <div className="flex flex-col items-center justify-center px-10 py-5 bg-gradient-to-r from-green-400 via-green-300 to-green-500">
      <h1 className="text-2xl font-medium text-white mb-5">Ibigezweho</h1> 
      <div className="w-full flex items-center justify-center gap-5">
        <PreviousButton onClick={handlePrevious} />
        <div className="flex gap-5">
          {updates.slice(currentIndex, currentIndex + 2).map((update, index) => (
            <div key={index} className="w-full max-w-md p-5 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary mb-2">{update.title}</h2> 
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