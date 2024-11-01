import React from "react";
import GreenButton from "../Buttons/GreenButton";

interface StudentDiscountFormProps {
  isStudent: boolean;
  setIsStudent: (value: boolean) => void;
  handleStudentCardImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassportImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
}

const StudentDiscountForm: React.FC<StudentDiscountFormProps> = ({
  isStudent,
  setIsStudent,
  handleStudentCardImageChange,
  handlePassportImageChange,
  handlePreviousStep,
  handleNextStep,
}) => {
  return (
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
  );
};

export default StudentDiscountForm;