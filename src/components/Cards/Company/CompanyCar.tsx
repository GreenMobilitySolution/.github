import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../../rating/StarRating";
import { Company } from "../../../types";
import GreenButton from "../../Buttons/GreenButton";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

const CompanySection: React.FC<{ company: Company }> = ({ company }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleButtonClick = () => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      toast.error("Please login to book a trip");
      navigate("/login");
      return;
    }
    navigate(`/book/car?company-name=${company.name}`);
  };

  if (!company) {
    toast.error("Error: Company data is not available.");
  }

  return (
    <div className="bg-white shadow-lg rounded-md p-6 max-w-lg mx-auto">
      <ToastContainer />
      <img
        src={company.logo}
        alt={company.name}
        className="object-cover rounded-md"
      />
      <div className="flex items-center justify-between mb-4">
        <div className="ml-4">
          <h2 className="font-medium text-xl">{company.name}</h2>
          <StarRating rating={company.rating} />
        </div>
        <div className="text-right">
          <p className="text-l font-semibold text-yellow-900">
            {company.NumberOfRoutes} Routes
          </p>
          <GreenButton handle={handleButtonClick}>Katisha itike!</GreenButton>
        </div>
      </div>
      <p className="text-gray-700 text-base mb-4">{company.description}</p>
      <div className="mb-4">
        <h3 className="text-l font-medium">Aho Ikorera</h3>
        <p className="text-s text-gray-700">{company.WhereItOperates}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-l font-medium">Ubwoko bwa poromosiyo itanga</h3>
        <p className="text-gray-700 text-s">{company.typeOfDiscountItOffers}</p>
      </div>
    </div>
  );
};

export default CompanySection;
