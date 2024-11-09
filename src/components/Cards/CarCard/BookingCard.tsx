import React, { useState } from "react";
import StarRating from "../../rating/StarRating";
import { Car } from "../../../types";

interface CarCardProps {
  car: Car;
  selectedCar: Car | null;
  selectedTimeSlot: string;
  onTimeSlotSelect: (time: string) => void;
  onSeatSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSeats: number;
  onChooseCar: (car: Car) => void;
}

const BookingCarCard: React.FC<CarCardProps> = ({
  car,
  selectedCar,
  selectedTimeSlot,
  onTimeSlotSelect,
  onSeatSelect,
  selectedSeats,
  onChooseCar,
}) => {
  const [localSelectedTimeSlot, setLocalSelectedTimeSlot] =
    useState<string>("");
  const [localSelectedSeats, setLocalSelectedSeats] = useState<number>(1);

  const handleLocalTimeSlotSelect = (time: string) => {
    setLocalSelectedTimeSlot(time);
    onTimeSlotSelect(time);
  };

  const handleLocalSeatSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seats = parseInt(e.target.value, 10);
    setLocalSelectedSeats(seats);
    onSeatSelect(e);
  };

  const handleChooseCar = () => {
    if (localSelectedTimeSlot && localSelectedSeats > 0) {
      onChooseCar(car);
    }
  };

  return (
    <div
      className={`border flex flex-col items-center justify-center pt-4 rounded-md ${selectedCar?.id === car.id ? "border-blue-500" : "border-gray-300"}`}
    >
      <img
        className="w-[80%] h-25 rounded"
        src={car.logo}
        alt={`${car.name}`}
      />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-medium text-xl mb-2"> {`${car.name}`}</h1>
            <StarRating rating={car.rating ?? 2} />
          </div>
        </div>
        <div className="mt-2">
          {car.availableTimeSlots.map((slot) => (
            <div key={slot.time} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={localSelectedTimeSlot === slot.time}
                onChange={() => handleLocalTimeSlotSelect(slot.time)}
                className="mr-2"
              />
              <label
                className={`p-2 border rounded-md ${localSelectedTimeSlot === slot.time ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {slot.time} - {slot.seats} seats available
              </label>
            </div>
          ))}
        </div>
        {localSelectedTimeSlot && (
          <div className="mt-4">
            <label className="block text-gray-700 mb-2" htmlFor="seatCount">
              Number of Seats
            </label>
            <input
              type="number"
              id="seatCount"
              name="seatCount"
              value={localSelectedSeats}
              onChange={handleLocalSeatSelect}
              min="1"
              max={
                car.availableTimeSlots.find(
                  (slot) => slot.time === localSelectedTimeSlot
                )?.seats || 1
              }
              className="w-full p-2 border rounded-lg"
            />
          </div>
        )}
        <div className="mt-4 flex justify-center">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
            onClick={handleChooseCar}
          >
            Choose Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCarCard;
