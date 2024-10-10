import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import GreenButton from "../../components/Buttons/GreenButton";
import PageTitle from "../../components/PageTitle";
import BookingCarCard from "../../components/Cards/CarCard/BookingCard";
import { Car, Package } from "../../../lib";
import { companyCars, individualCars } from "../../../Database/Car/BookingCars";
import LoadButton from "../../components/Buttons/LoadButton";

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const direction = queryParams.get("direction");
  const price = queryParams.get("price");

  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [packages, setPackages] = useState<Package[]>([]);
  const [isStudent, setIsStudent] = useState(false);
  const [visibleCompanyCars, setVisibleCompanyCars] = useState(5);
  const [visibleIndividualCars, setVisibleIndividualCars] = useState(5);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleCarSelection = (car: Car) => {
    setSelectedCar(car);
    setSelectedTimeSlot("");
  };

  const handleTimeSlotSelection = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handlePackageDetails = (pkg: Package) => {
    setPackages([...packages, pkg]);
    handleNextStep();
  };

  const loadMoreCompanyCars = () => {
    setVisibleCompanyCars((prev) => prev + 5);
  };

  const loadMoreIndividualCars = () => {
    setVisibleIndividualCars((prev) => prev + 5);
  };

  return (
    <>
      <PageTitle title={`MobyLife | ${direction}`} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transition-transform transform">
          {step === 1 && (
            <>
              <h1 className="text-2xl font-semibold mb-4">Which car do you want to go with?</h1>
              <div className="flex flex-col  flex items-center justify-center gap-5 mb-4">
                <h1 className="text-primary text-xl mt-5 mb-5">Public Cars</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companyCars.slice(0, visibleCompanyCars).map((car) => (
                    <BookingCarCard
                      key={car.id}
                      car={car}
                      selectedCar={selectedCar}
                      selectedTimeSlot={selectedTimeSlot}
                      onCarSelect={handleCarSelection}
                      onTimeSlotSelect={handleTimeSlotSelection}
                    />
                  ))}
                </div>
                {visibleCompanyCars < companyCars.length && (
                  <LoadButton handle={loadMoreCompanyCars}>
                    Load More
                  </LoadButton>
                )}
                <h1 className="text-primary text-xl mt-5 mb-5">Twegerane</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {individualCars.slice(0, visibleIndividualCars).map((car) => (
                    <BookingCarCard
                      key={car.id}
                      car={car}
                      selectedCar={selectedCar}
                      selectedTimeSlot={selectedTimeSlot}
                      onCarSelect={handleCarSelection}
                      onTimeSlotSelect={handleTimeSlotSelection}
                    />
                  ))}
                </div>
                {visibleIndividualCars < individualCars.length && (
                  <LoadButton handle={loadMoreIndividualCars}>
                    Load More
                  </LoadButton>
                )}
              </div>
              <GreenButton handle={handleNextStep} disabled={!selectedCar || !selectedTimeSlot}>
                Next
              </GreenButton>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-2xl font-semibold mb-4">Enter Package Details</h1>
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const size = (form.elements.namedItem("packageSize") as HTMLInputElement).value;
                  const weight = parseFloat((form.elements.namedItem("packageWeight") as HTMLInputElement).value);
                  const count = parseInt((form.elements.namedItem("packageCount") as HTMLInputElement).value, 10);
                  handlePackageDetails({ size, weight, count });
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="packageSize">
                    Package Size
                  </label>
                  <input
                    type="text"
                    id="packageSize"
                    name="packageSize"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="packageWeight">
                    Package Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="packageWeight"
                    name="packageWeight"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="packageCount">
                    Number of Packages
                  </label>
                  <input
                    type="number"
                    id="packageCount"
                    name="packageCount"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <GreenButton handle={handleNextStep}>
                  Next
                </GreenButton>
              </form>
              <GreenButton handle={handlePreviousStep}>
                Previous
              </GreenButton>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-2xl font-semibold mb-4">Booking Summary</h1>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Direction:</span> {direction}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Car Type:</span> {selectedCar?.type}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Selected Car:</span> {selectedCar?.name}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Selected Time Slot:</span> {selectedTimeSlot}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Packages:</span> {packages.length}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Student Discount:</span> {isStudent && selectedCar?.type === "company" ? "5%" : "0%"}
              </p>
              <GreenButton handle={() => alert("Booking Confirmed!")}>
                Confirm Booking
              </GreenButton>
              <GreenButton handle={handlePreviousStep}>
                Previous
              </GreenButton>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPage;