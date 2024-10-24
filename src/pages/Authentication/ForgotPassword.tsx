import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface ForgotPasswordData {
  email: string;
}

export const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ForgotPasswordData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registerResponse, setRegisterResponse] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ForgotPasswordData> = async (data) => {
    setLoading(true);
    setError(null);
    setRegisterResponse(null);
    try {
      const response = await axios.post('/api/password-reset', { email: data.email });
      setRegisterResponse(response.data.message);
      reset();
    } catch (err) {
      setError((err as any).response?.data?.message || 'Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
    if (registerResponse) {
      toast.success(registerResponse);
      setRegisterResponse(null);
    }
  }, [error, registerResponse]);

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="min-h-[100vh] h-auto w-full flex items-center justify-center py-10 md:px-4 bg-transparent1">
      <form
        className="min-w-[100%] flex flex-col items-center justify-start gap-y-4 bg-white sm:p-12 px-6 py-12 md:min-w-[500px] md:max-w-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col items-start justify-start gap-y-2">
          <h1 className="text-black1 ml-10 font-Poppins text-xl md:text-2xl">Forgot your password?</h1>
          <p className="text-neutrals600 ml-5 sm:text-base text-sm">
            Enter your email and we&apos;ll send you a reset link.
          </p>
          <div className="w-full min-h-[50px] flex items-center justify-between gap-x-1 px-4 py-2 border border-grey1 bg-white">
            <input
              className="w-full h-[100%] border-none outline-none bg-white text-grey2 text-lg"
              type="email"
              placeholder="johnDoe@gmail.com"
              {...register('email', {
                required: 'Email is required',
                validate: (value) => isEmailValid(value) || 'Invalid email format'
              })}
            />
          </div>
          {errors.email && <span className="text-orange">{errors.email.message}</span>}
        </div>

        <button
          type={loading ? 'button' : 'submit'}
          disabled={!isEmailValid || loading}
          className={`w-full min-h-[50px] flex items-center justify-center bg-primary text-white text-lg rounded-3xl font-medium mt-2 ${loading ? 'cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Send Reset Link'}
        </button>

        <p className="text-small text-black1 md:text-lg">
          Remember your credentials?{' '}
          <a href="/login" className="ml-1 text-orange">
            login here
          </a>
        </p>
      </form>
    </div>
  );
};