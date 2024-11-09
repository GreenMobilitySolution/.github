import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { Car, Package } from "../../types";
import { companyCars, individualCars } from "../../../Database/Car/BookingCars";
import CarSelection from "../../components/Bookings/CarSelection";
import PackageDetailsForm from "../../components/Forms/PackageDetailsForm";
import PaymentOptions from "../../components/Bookings/PaymentOptions";
import StudentDiscountForm from "../../components/Forms/StudentDiscountForm";
import BookingSummary from "../../components/Bookings/BookingSummary";
import  { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";


const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const direction = queryParams.get("direction");
  const price = queryParams.get("price");

  const navigate = useNavigate();
  
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
  const [paymentOption, setPaymentOption] = useState<string>("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (selectedCar?.name !== "RTCO" && step === 2) {
      setStep(4);
    }
  }, [selectedCar, step]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleTimeSlotSelection = (time: string) => {
    setSelectedTimeSlot(time);
  };

  const handleSeatSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSeats(parseInt(e.target.value, 10));
  };

  const handleChooseCar = (car: Car) => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      toast.error("Please login to book a trip");
      navigate("/login");
      return;
    }
    setSelectedCar(car);
    if (selectedTimeSlot && selectedSeats > 0) {
      handleNextStep();
    }
  };

  const handlePackageDetails = (pkg: Package) => {
    setPackages([...packages, pkg]);
    handleNextStep();
  };

  const handleStudentCardImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setStudentCardImage(e.target.files[0]);
    }
  };

  const handlePassportImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption(option);
    setShowPaymentModal(true);
  };

  const handlePaymentConfirmation = () => {
    setShowPaymentModal(false);
    setStep(5);
  };

  const handlePaymentCancellation = () => {
    setShowPaymentModal(false);
  };

  const filteredCompanyCars = companyCars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredIndividualCars = individualCars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageTitle title={`MobyLife | ${direction}`} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl transition-transform transform">
          {step === 1 && (
            <CarSelection
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              filteredCompanyCars={filteredCompanyCars}
              filteredIndividualCars={filteredIndividualCars}
              visibleCompanyCars={visibleCompanyCars}
              visibleIndividualCars={visibleIndividualCars}
              loadMoreCompanyCars={loadMoreCompanyCars}
              loadMoreIndividualCars={loadMoreIndividualCars}
              selectedCar={selectedCar}
              selectedTimeSlot={selectedTimeSlot}
              handleTimeSlotSelection={handleTimeSlotSelection}
              handleSeatSelection={handleSeatSelection}
              selectedSeats={selectedSeats}
              handleChooseCar={handleChooseCar}
            />
          )}

          {step === 2 && selectedCar?.name === "RTCO" && (
            <PackageDetailsForm
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
              handlePackageDetails={handlePackageDetails}
            />
          )}

          {step === 3 && selectedCar?.name === "RTCO" && (
            <StudentDiscountForm
              isStudent={isStudent}
              setIsStudent={setIsStudent}
              handleStudentCardImageChange={handleStudentCardImageChange}
              handlePassportImageChange={handlePassportImageChange}
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
            />
          )}

          {step === 4 && (
            <PaymentOptions
              paymentOption={paymentOption}
              handlePaymentOptionChange={handlePaymentOptionChange}
              handlePreviousStep={handlePreviousStep}
            />
          )}

          {showPaymentModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Payment Confirmation</h2>
                <p className="mb-4">
                  You are going to pay {price} RWF using {paymentOption}.
                </p>
                <div className="flex justify-between">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={handlePaymentCancellation}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    onClick={handlePaymentConfirmation}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <BookingSummary
              direction={direction}
              selectedCar={selectedCar}
              selectedTimeSlot={selectedTimeSlot}
              selectedSeats={selectedSeats}
              packages={packages}
              isStudent={isStudent}
              studentCardImage={studentCardImage}
              passportImage={passportImage}
              paymentOption={paymentOption}
              price={price}
              handlePreviousStep={handlePreviousStep}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPage;
