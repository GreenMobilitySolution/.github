import React from 'react';
import StarRating from '../../rating/StarRating';
import { Car } from '../../../../lib';

interface CarCardProps {
  car: Car;
  selectedCar: Car | null;
  selectedTimeSlot: string;
  onCarSelect: (car: Car) => void;
  onTimeSlotSelect: (time: string) => void;
}

const BookingCarCard: React.FC<CarCardProps> = ({ car, selectedCar, selectedTimeSlot, onCarSelect, onTimeSlotSelect }) => {
  return (
    <div
      className={`border flex flex-col items-center justify-center pt-4 rounded-md ${selectedCar?.id === car.id ? "border-blue-500" : "border-gray-300"}`}
      onClick={() => onCarSelect(car)}
    >
        <img className="w-[80%] h-25 rounded" src={car.logo} alt={`${car.name}`} />
        <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-medium text-xl mb-2"> {`${car.name}`}</h1>
            <StarRating rating={car.rating ?? 2} />
          </div>
        </div>
      <div className="mt-2">
        {car.availableTimeSlots.map((slot) => (
          <div
            key={slot.time}
            className={`p-2 mt-2 border rounded-md ${selectedCar?.id === car.id && selectedTimeSlot === slot.time ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={(e) => {
              e.stopPropagation();
              onTimeSlotSelect(slot.time);
            }}
          >
            {slot.time} - {slot.seats} seats available
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BookingCarCard;