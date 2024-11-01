import { useState } from "react";
import { BusStopCardProps } from "../../../../types";
import { FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import GreenButton from "../../Buttons/GreenButton";
import { useNavigate } from "react-router-dom";

export const BusStopCard: React.FC<BusStopCardProps> = ({ busStop, route }) => {
  const navigate = useNavigate();
  const [selectedDirection, setSelectedDirection] = useState<string>("");

  const handleButtonClick = () => {
    navigate(`/bookings/select-car?direction=${selectedDirection}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <h2 className="text-xl font-semibold">{busStop.name}</h2>
        </div>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Akarere:</span> {busStop.location}
        </p>
        <div className="w-full border-t border-gray-200 my-4"></div>
        <div className="w-full">
          <h3 className="text-lg font-medium mb-2">Ibiciro By'amatike:</h3>
          <div className="flex items-center mb-2">
            <FaTicketAlt className="text-blue-500 mr-2" />
            <p className="text-gray-700">
              <span className="font-medium">
                <strong>Uva/Ujya:</strong>
              </span>{" "}
              {route.from}
            </p>
          </div>
          <p className="text-green-700 mb-4">
            <span className="font-medium">Igiciro:</span> 5,000 FRW
          </p>
          <div className="flex items-center mb-2">
            <FaTicketAlt className="text-blue-500 mr-2" />
            <p className="text-gray-700">
              <span className="font-medium">
                <strong>Uva/Ujya:</strong>
              </span>{" "}
              {route.to}
            </p>
          </div>
          <p className="text-green-700">
            <span className="font-medium">Igiciro:</span> 5,000 FRW
          </p>
        </div>
        <div className="w-full border-t border-gray-200 my-4"></div>
        <div className="w-full">
          <h3 className="text-lg font-medium mb-2">Hitamo amerekezo:</h3>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id={`direction-from-${busStop.id}`}
              name={`direction-${busStop.id}`}
              value={route.from}
              checked={selectedDirection === route.from}
              onChange={(e) => setSelectedDirection(e.target.value)}
              className="mr-2"
            />
            <label
              htmlFor={`direction-from-${busStop.id}`}
              className="text-gray-700"
            >
              <span className="font-medium">Uva/Ujya:</span> {route.from}
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id={`direction-to-${busStop.id}`}
              name={`direction-${busStop.id}`}
              value={route.to}
              checked={selectedDirection === route.to}
              onChange={(e) => setSelectedDirection(e.target.value)}
              className="mr-2"
            />
            <label
              htmlFor={`direction-to-${busStop.id}`}
              className="text-gray-700"
            >
              <span className="font-medium">Uva/Ujya:</span> {route.to}
            </label>
          </div>
        </div>
      </div>
      <GreenButton handle={handleButtonClick} disabled={!selectedDirection}>
        Katisha itike
      </GreenButton>
    </div>
  );
};
