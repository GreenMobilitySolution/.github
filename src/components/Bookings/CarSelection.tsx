import React from "react";
import BookingCarCard from "../Cards/CarCard/BookingCard";
import LoadButton from "../Buttons/LoadButton";
import { Car } from "../../../types";

interface CarSelectionProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredCompanyCars: Car[];
  filteredIndividualCars: Car[];
  visibleCompanyCars: number;
  visibleIndividualCars: number;
  loadMoreCompanyCars: () => void;
  loadMoreIndividualCars: () => void;
  selectedCar: Car | null;
  selectedTimeSlot: string;
  handleTimeSlotSelection: (time: string) => void;
  handleSeatSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSeats: number;
  handleChooseCar: (car: Car) => void;
}

const CarSelection: React.FC<CarSelectionProps> = ({
  searchTerm,
  handleSearchChange,
  filteredCompanyCars,
  filteredIndividualCars,
  visibleCompanyCars,
  visibleIndividualCars,
  loadMoreCompanyCars,
  loadMoreIndividualCars,
  selectedCar,
  selectedTimeSlot,
  handleTimeSlotSelection,
  handleSeatSelection,
  selectedSeats,
  handleChooseCar,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Select Your Car</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by car name"
          className="py-2 px-4 border rounded-lg w-full max-w-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mb-6">
        <h2 className="text-2xl font-semibold text-primary">
          Public Companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanyCars
            .slice(0, visibleCompanyCars)
            .map((car, index) => (
              <BookingCarCard
                key={`${car.id}-${index}`}
                car={car}
                selectedCar={selectedCar}
                selectedTimeSlot={selectedTimeSlot}
                onTimeSlotSelect={handleTimeSlotSelection}
                onSeatSelect={handleSeatSelection}
                selectedSeats={selectedSeats}
                onChooseCar={handleChooseCar}
              />
            ))}
        </div>
        {visibleCompanyCars < filteredCompanyCars.length && (
          <LoadButton handle={loadMoreCompanyCars}>Load More</LoadButton>
        )}
        <h2 className="text-2xl font-semibold text-primary mt-8">Other Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndividualCars
            .slice(0, visibleIndividualCars)
            .map((car, index) => (
              <BookingCarCard
                key={`${car.id}-${index}`}
                car={car}
                selectedCar={selectedCar}
                selectedTimeSlot={selectedTimeSlot}
                onTimeSlotSelect={handleTimeSlotSelection}
                onSeatSelect={handleSeatSelection}
                selectedSeats={selectedSeats}
                onChooseCar={handleChooseCar}
              />
            ))}
        </div>
        {visibleIndividualCars < filteredIndividualCars.length && (
          <LoadButton handle={loadMoreIndividualCars}>Load More</LoadButton>
        )}
      </div>
    </>
  );
};

export default CarSelection;
