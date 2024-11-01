import React from "react";
import GreenButton from "../../components/Buttons/GreenButton";
import { Car, Package } from "../../../types";

interface BookingSummaryProps {
  direction: string | null;
  selectedCar: Car | null;
  selectedTimeSlot: string;
  selectedSeats: number;
  packages: Package[];
  isStudent: boolean;
  studentCardImage: File | null;
  passportImage: File | null;
  paymentOption: string;
  price: string | null;
  handlePreviousStep: () => void;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  direction,
  selectedCar,
  selectedTimeSlot,
  selectedSeats,
  packages,
  isStudent,
  studentCardImage,
  passportImage,
  paymentOption,
  price,
  handlePreviousStep,
}) => {
  return (
    <div className="text-gray-700 mb-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Summary</h1>
      <p className="mb-2">
        <span className="font-semibold">Direction:</span> {direction}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Car Type:</span> {selectedCar?.type}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Selected Car:</span> {selectedCar?.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Selected Time Slot:</span>{" "}
        {selectedTimeSlot}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Number of Seats:</span> {selectedSeats}
      </p>
      {packages.length > 0 && (
        <p className="mb-2">
          <span className="font-semibold">Packages:</span> {packages.length}
        </p>
      )}
      {isStudent && selectedCar?.name === "RTCO" && (
        <p className="mb-2">
          <span className="font-semibold">Student Discount:</span> 5%
        </p>
      )}
      <p className="mb-2">
        <span className="font-semibold">Payment Option:</span> {paymentOption}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Price:</span> {price} RWF
      </p>
      {studentCardImage && (
        <p className="mb-2">
          <span className="font-semibold">Student Card Image:</span>{" "}
          {studentCardImage.name}
        </p>
      )}
      {passportImage && (
        <p className="mb-2">
          <span className="font-semibold">Passport Image:</span>{" "}
          {passportImage.name}
        </p>
      )}
      <div className="flex justify-between mt-6">
        <GreenButton handle={handlePreviousStep}>Previous</GreenButton>
        <GreenButton handle={() => alert("Booking Confirmed!")}>
          Confirm Booking
        </GreenButton>
      </div>
    </div>
  );
};

export default BookingSummary;
