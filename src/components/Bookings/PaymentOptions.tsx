import React from "react";
import GreenButton from "../Buttons/GreenButton";

interface PaymentOptionsProps {
  paymentOption: string;
  handlePaymentOptionChange: (option: string) => void;
  handlePreviousStep: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  paymentOption,
  handlePaymentOptionChange,
  handlePreviousStep,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Payment Option</h1>
      <div className="flex flex-col items-center gap-4 mb-6">
        <button
          className={`py-2 px-4 border rounded-lg w-full max-w-md ${paymentOption === "MOMO" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => handlePaymentOptionChange("MOMO")}
        >
          MOMO
        </button>
        <button
          className={`py-2 px-4 border rounded-lg w-full max-w-md ${paymentOption === "Airtel Money" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => handlePaymentOptionChange("Airtel Money")}
        >
          Airtel Money
        </button>
        <button
          className={`py-2 px-4 border rounded-lg w-full max-w-md ${paymentOption === "Tp&Go" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => handlePaymentOptionChange("Tp&Go")}
        >
          Tap&Go
        </button>
      </div>
      <div className="flex justify-between">
        <GreenButton handle={handlePreviousStep}>
          Previous
        </GreenButton>
      </div>
    </>
  );
};

export default PaymentOptions;