import React from "react";
import GreenButton from "../Buttons/GreenButton";

interface PackageDetailsFormProps {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  handlePackageDetails: (pkg: { size: string; weight: number; count: number }) => void;
}

const PackageDetailsForm: React.FC<PackageDetailsFormProps> = ({
  handlePreviousStep,
  handleNextStep,
  handlePackageDetails,
}) => {
  return (
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
  );
};

export default PackageDetailsForm;