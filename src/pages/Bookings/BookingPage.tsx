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
  const [selectedSeats, setSelectedSeats] = useState<number>(1);
  const [packages, setPackages] = useState<Package[]>([]);
  const [isStudent, setIsStudent] = useState(false);
  const [studentCardImage, setStudentCardImage] = useState<File | null>(null);
  const [passportImage, setPassportImage] = useState<File | null>(null);
  const [visibleCompanyCars, setVisibleCompanyCars] = useState(3);
  const [visibleIndividualCars, setVisibleIndividualCars] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleCarSelection = (car: Car) => {
    setSelectedCar(car);
    setSelectedTimeSlot("");
    setSelectedSeats(1);
  };

  const handleTimeSlotSelection = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleSeatSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSeats(parseInt(e.target.value, 10));
  };

  const handleChooseCar = (car: Car) => {
    setSelectedCar(car);
    if (selectedTimeSlot && selectedSeats > 0) {
      if (car.name === "RTCO") {
        handleNextStep();
      } else {
        setStep(3);
      }
    }
  };

  const handlePackageDetails = (pkg: Package) => {
    setPackages([...packages, pkg]);
    handleNextStep();
  };

  const handleStudentCardImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setStudentCardImage(e.target.files[0]);
    }
  };

  const handlePassportImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPassportImage(e.target.files[0]);
    }
  };

  const loadMoreCompanyCars = () => {
    setVisibleCompanyCars((prev) => prev + 3);
  };

  const loadMoreIndividualCars = () => {
    setVisibleIndividualCars((prev) => prev + 3);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCompanyCars = companyCars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredIndividualCars = individualCars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageTitle title={`MobyLife | ${direction}`} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl transition-transform transform">
          {step === 1 && (
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
                <h2 className="text-2xl font-semibold text-primary">Public Companies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCompanyCars.slice(0, visibleCompanyCars).map((car) => (
                    <BookingCarCard
                      key={car.id}
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
                  <LoadButton handle={loadMoreCompanyCars}>
                    Load More
                  </LoadButton>
                )}
                <h2 className="text-2xl font-semibold text-primary mt-8">Other Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredIndividualCars.slice(0, visibleIndividualCars).map((car) => (
                    <BookingCarCard
                      key={car.id}
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
                  <LoadButton handle={loadMoreIndividualCars}>
                    Load More
                  </LoadButton>
                )}
              </div>
            </>
          )}

          {step === 2 && selectedCar?.name === "RTCO" && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-center">Enter Package Details</h1>
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
                    className="w-full p-3 border rounded-lg"
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
                    className="w-full p-3 border rounded-lg"
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
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <GreenButton handle={handlePreviousStep}>
                    Previous
                  </GreenButton>
                  <GreenButton handle={handleNextStep}>
                    Next
                  </GreenButton>
                </div>
              </form>
            </>
          )}

          {step === 2 && selectedCar?.name !== "RTCO" && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-center">Student Discount</h1>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="isStudent">
                  Are you a student?
                </label>
                <input
                  type="checkbox"
                  id="isStudent"
                  name="isStudent"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="isStudent">Yes</label>
              </div>
              {isStudent && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="studentCardImage">
                      Upload Student Card Image
                    </label>
                    <input
                      type="file"
                      id="studentCardImage"
                      name="studentCardImage"
                      accept="image/*"
                      onChange={handleStudentCardImageChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="passportImage">
                      Capture Live Passport Photo
                    </label>
                    <input
                      type="file"
                      id="passportImage"
                      name="passportImage"
                      accept="image/*"
                      onChange={handlePassportImageChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </>
              )}
              <div className="flex justify-between">
                <GreenButton handle={handlePreviousStep}>
                  Previous
                </GreenButton>
                <GreenButton handle={handleNextStep}>
                  Next
                </GreenButton>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-center">Booking Summary</h1>
              <div className="text-gray-700 mb-6">
                <p className="mb-2"><span className="font-semibold">Direction:</span> {direction}</p>
                <p className="mb-2"><span className="font-semibold">Car Type:</span> {selectedCar?.type}</p>
                <p className="mb-2"><span className="font-semibold">Selected Car:</span> {selectedCar?.name}</p>
                <p className="mb-2"><span className="font-semibold">Selected Time Slot:</span> {selectedTimeSlot}</p>
                <p className="mb-2"><span className="font-semibold">Number of Seats:</span> {selectedSeats}</p>
                <p className="mb-2"><span className="font-semibold">Packages:</span> {packages.length}</p>
                <p className="mb-2"><span className="font-semibold">Student Discount:</span> {isStudent && selectedCar?.name === "RTCO" ? "5%" : "0%"}</p>
              </div>
              <div className="flex justify-between">
                <GreenButton handle={handlePreviousStep}>
                  Previous
                </GreenButton>
                <GreenButton handle={() => alert("Booking Confirmed!")}>
                  Confirm Booking
                </GreenButton>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPage;