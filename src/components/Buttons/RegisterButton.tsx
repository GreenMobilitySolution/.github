import React from 'react';

interface RegisterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[50px] flex items-center justify-center bg-green-500 text-white text-2xl font-medium mt-2 rounded-3xl ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
};

export default RegisterButton;