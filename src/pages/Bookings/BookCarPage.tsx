import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { Car, Package } from "../../../types";
import PackageDetailsForm from "../../components/Forms/PackageDetailsForm";
import PaymentOptions from "../../components/Bookings/PaymentOptions";
import StudentDiscountForm from "../../components/Forms/StudentDiscountForm";
import BookingSummary from "../../components/Bookings/BookingSummary";
import { companyCars } from "../../../Database/Car/BookingCars";
import GreenButton from "../../components/Buttons/GreenButton";
import { KBS } from "../../assets/images/companies";

const staticRoutes = [
  { id: 1, from: "Nyabugogo", to: "Downtown", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 2, from: "Nyabugogo", to: "Gikondo", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 3, from: "Kimironko", to: "Gatenga", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 4, from: "Nyabugogo", to: "Nyanza", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 5, from: "Nyabugogo", to: "Kinyinya", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 6, from: "Nyabugogo", to: "Gisozi", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 7, from: "Nyabugogo", to: "Batsinda", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 8, from: "Nyabugogo", to: "Kacyiru", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 9, from: "Nyabugogo", to: "Remera", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
  { id: 10, from: "Nyabugogo", to: "Kabuga", timeSlots: ["08:00 AM", "10:00 AM", "12:00 PM"], price: 2020, availableSeats: 6  },
];

const staticBusStops = [
  { id: 1, name: "Bus Stop 1", price: 2020, availableSeats: 6  },
  { id: 2, name: "Bus Stop 2", price: 2020, availableSeats: 6  },
  { id: 3, name: "Bus Stop 3", price: 2020, availableSeats: 6  },
  { id: 4, name: "Bus Stop 4", price: 2020, availableSeats: 6  },
  { id: 5, name: "Bus Stop 5", price: 2020, availableSeats: 6  },
  { id: 6, name: "Bus Stop 6", price: 2020, availableSeats: 6 },
];

const BookCarPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const companyName = queryParams.get("company-name");
  const price = queryParams.get("price");

  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<number>(1);
  const [packages, setPackages] = useState<Package[]>([]);
  const [isStudent, setIsStudent] = useState(false);
  const [studentCardImage, setStudentCardImage] = useState<File | null>(null);
  const [passportImage, setPassportImage] = useState<File | null>(null);
  const [paymentOption, setPaymentOption] = useState<string>("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(staticRoutes[0]);
  const [selectedBusStop, setSelectedBusStop] = useState("");

  const navigate = useNavigate();

  const getCar = companyCars.find((car) => car.name === companyName);

  const [routeSearchTerm, setRouteSearchTerm] = useState("");
  const [busStopSearchTerm, setBusStopSearchTerm] = useState("");
  const [currentRoutePage, setCurrentRoutePage] = useState(1);
  const [currentBusStopPage, setCurrentBusStopPage] = useState(1);

  const routesPerPage = 9;
  const busStopsPerPage = 5;

  interface Route {
    id: number;
    from: string;
    to: string;
    timeSlots: string[];
    price: number;
    availableSeats: number;
  }

  const handleRouteSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRouteSearchTerm(e.target.value);
  };

  interface BusStopSearchChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleBusStopSearchChange = (e: BusStopSearchChangeEvent): void => {
    setBusStopSearchTerm(e.target.value);
  };

  const handleRouteSelection = (route: any) => {
    setSelectedRoute(route);
    setSelectedTimeSlot("");
    setSelectedBusStop("");
  };

  const handleTimeSlotSelection = (timeSlot: any) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleBusStopSelection = (busStop: any) => {
    setSelectedBusStop(busStop);
  };

  const filteredRoutes = staticRoutes.filter((route) =>
    route.from.toLowerCase().includes(routeSearchTerm.toLowerCase())
  );

  const filteredBusStops = staticBusStops.filter((busStop) =>
    busStop.name.toLowerCase().includes(busStopSearchTerm.toLowerCase())
  );

  const paginatedRoutes = filteredRoutes.slice(
    (currentRoutePage - 1) * routesPerPage,
    currentRoutePage * routesPerPage
  );

  const paginatedBusStops = filteredBusStops.slice(
    (currentBusStopPage - 1) * busStopsPerPage,
    currentBusStopPage * busStopsPerPage
  );

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

  const handleButtonClick = () => {
    handleNextStep();
  };

  return (
    <>
      <PageTitle title={`MobyLife | Booking ${companyName}`} />
      <div className="w-full flex flex-col items-center justify-center bg-gray-100 pt-6">
        <div className="w-full text-center mb-6">
          <div className="mb-5 mt-6 flex flex-col items-center justify-center">
            <img src={KBS} alt={companyName ?? ""} className="rounded-full mb-5" />
            <h1 className="text-3xl font-bold text-gray-800">
              <span className="text-3xl font-medium text-gray-500">Booking</span> {companyName}
            </h1>
          </div>
          {/* ROUTES AND BUS STOPS SECTION */}
          <div className="p-10 bg-white w-full rounded-lg mb-6">
            {/* LEFT SIDE */}
            <div className="flex items-center justify-center gap-5">
            <div className="bg-gray-100 mt-0 px-6 py-4 w-[50%] rounded-lg mb-6">
              <p className="text-xl text-green-700 mb-6 mt-6">Choose route:</p>
              <input
                type="text"
                value={routeSearchTerm}
                onChange={handleRouteSearchChange}
                placeholder="Search route"
                className="py-2 px-4 border rounded-lg w-full mb-4"
              />
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Route</th>
                    <th className="py-2 px-4 border-b">Available seats</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRoutes.map((route) => (
                    <tr 
                    key={route.id} 
                    className={`cursor-pointer ${selectedRoute.id === route.id ? "bg-green-100" : "hover:bg-gray-200"}`}
                    onClick={() => handleRouteSelection(route)}
                    >
                      <td className="py-2 text-left px-4 border-b">{route.from} - {route.to}</td>
                      <td className="py-2 px-4 border-b">{route.availableSeats}</td>
                      <td className="py-2 px-4 border-b">{route.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setCurrentRoutePage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </button>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() =>
                    setCurrentRoutePage((prev) =>
                      Math.min(prev + 1, Math.ceil(filteredRoutes.length / routesPerPage))
                    )
                  }
                >
                  Next
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gray-100 p-6 w-[50%] rounded-lg mb-6">
              <p className="text-xl text-gray-600 mb-6 mt-6"><span className="text-green-700">{selectedRoute.from} - {selectedRoute.to}</span> Route Details</p>
              {selectedRoute && (
                <>
                  <p className="text-lg font-semibold mb-4">Available Time Slots:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedRoute.timeSlots.map((timeSlot) => (
                      <button
                        key={timeSlot}
                        className={`py-2 px-4 border rounded-lg ${
                          selectedTimeSlot === timeSlot ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                        onClick={() => handleTimeSlotSelection(timeSlot)}
                      >
                        {timeSlot}
                      </button>
                    ))}
                  </div>
                  <p className="text-lg font-semibold mb-4">Bus Stops:</p>
                  <input
                    type="text"
                    value={busStopSearchTerm}
                    onChange={handleBusStopSearchChange}
                    placeholder="Search bus stop"
                    className="py-2 px-4 border rounded-lg w-full mb-4"
                  />
                  <table className="w-full bg-white rounded-lg shadow-lg">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">Bus Stop</th>
                        <th className="py-2 px-4 border-b">Available seats</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Choose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedBusStops.map((busStop) => (
                        <tr key={busStop.id}>
                          <td className="py-2 px-4 border-b">{busStop.name}</td>
                          <td className="py-2 px-4 border-b">{busStop.availableSeats}</td>
                          <td className="py-2 px-4 border-b">{busStop.price}</td>
                          <td className="py-2 px-4 border-b">
                            <button
                              className="text-blue-500 hover:underline"
                              onClick={() => handleBusStopSelection(busStop)}
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between mt-4">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setCurrentBusStopPage((prev) => Math.max(prev - 1, 1))}
                    >
                      Previous
                    </button>
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() =>
                        setCurrentBusStopPage((prev) =>
                          Math.min(prev + 1, Math.ceil(filteredBusStops.length / busStopsPerPage))
                        )
                      }
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </div>
            </div>
            <div>
            {step === 1 && (
            <GreenButton handle={handleButtonClick}>
                  Next
          </GreenButton>
          )}
          </div>
          </div>
          {/* END OF ROUTES AND BUS STOPS SECTION */}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl transition-transform transform">
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
              direction={companyName}
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
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Book a Car</h2>
              <p className="mb-4 text-red-700">
                Select a car, route, bus stop, and time slot to book a ride.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookCarPage;