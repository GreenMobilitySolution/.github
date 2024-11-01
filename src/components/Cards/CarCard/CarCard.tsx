import React from "react";
import { useNavigate } from "react-router-dom";
import { CarCardProps } from "../../../types/Car/CarProp";
import StarRating from "../../rating/StarRating";
import GreenButton from "../../Buttons/GreenButton";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

const CarCard: React.FC<CarCardProps> = ({
  name,
  model,
  imageUrl,
  description,
  owner,
  rating,
}) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCardClick = () => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      toast.error("Please login to book a trip");
      navigate("/login");
      return;
    }
    navigate(`/bookings/select-car?car-name=${name}`);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={handleCardClick}
    >
      <img className="w-full" src={imageUrl} alt={`${name} ${model}`} />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-medium text-xl mb-2">
              {" "}
              {name} {model}
            </h1>
            <StarRating rating={rating} />
          </div>
          <div className="text-right">
            <GreenButton handle={handleCardClick} children={"Book"} />
          </div>
        </div>
        <div className="pt-3 pb-3">
          <p className="text-gray-700 text-base">
            <strong>Owner:</strong> {owner}
          </p>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #car
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #model
        </span>
      </div>
    </div>
  );
};

export default CarCard;
