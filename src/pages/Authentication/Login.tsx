import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import google from '../../images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginData } from '../../../lib/auth/loginData';

export interface DecodedToken {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginData> = async (userData: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/login', userData);
      const { token, message, email } = response.data;

      toast.success(message, {
        duration: 4000
      });

      if (message === 'Please provide the OTP sent to your email or phone') {
        localStorage.setItem('email', email);
        navigate('/otp-verification');
      } else {
        localStorage.setItem('token', token);
        navigate('/');
      }

      reset();
    } catch (err) {
      const errorMessage = axios.isAxiosError(err) && err.response?.data?.message 
        ? err.response.data.message 
        : 'Something went wrong, please try again.';
      setError(errorMessage);
      toast.error(errorMessage, {
        duration: 4000
      });
      if (errorMessage === 'Your account has been suspended') {
        navigate('/suspended-account');
      } else {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_APP_API_URL}/user/google-auth`, '_self');
  };

  return (
    <div className="min-h-[85vh] h-auto w-full flex items-center justify-center py-10 px-4 bg-transparent1">
      <form
        method="post"
        action="/login"
        className="min-w-[90%] flex flex-col items-center justify-start gap-y-4 py-10 px-8 md:min-w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="min-w-[100%] text-baseBlack text-2xl font-medium">Login</h1>

        <div className="w-full flex flex-col items-start justify-start gap-y-1">
          <p className="text-black1 text-base">Email Address</p>
          <div className="w-full min-h-[50px] flex items-center justify-between  gap-x-1 px-4 py-2  text-baseBlack border border-grey1 bg-white">
            <input
              className="w-full h-[100%] border-none outline-none bg-white text-grey2 text-base"
              type="email"
              placeholder="johnDoe@gmail.com"
              {...register('email', { required: true })}
            />
          </div>
          {errors.email && <span className="text-orange text-xs">Email is required</span>}
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-y-1">
          <p className="text-black1 text-base">Password</p>
          <div className="w-full min-h-[50px] flex items-center justify-between gap-x-1  px-4 py-2 border border-grey1 bg-white">
            <input
              className="w-full h-[100%] border-none outline-none bg-white text-grey2 text-base"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {showPassword ? (
              <EyeOff
                data-testid="eye-icon"
                strokeWidth={1.5}
                className="text-grey2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                data-testid="eye-icon"
                strokeWidth={1.5}
                className="text-grey2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {errors.password && <span className="text-orange text-xs">Password is required</span>}
        </div>
        <p className="text-small w-full text-black1 text-right">
          <a href="/forgot-password"> Forgot password? </a>
        </p>
        <button
          type="submit"
          disabled={loading}
          className={`w-full min-h-[50px] flex items-center justify-center rounded-3xl bg-primary text-white text-lg font-medium mt-2 ${loading ? 'cursor-not-allowed' : 'cu'}`}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>

        <p className="text-small  text-grey2">
          {"Don't have an account? "}
          <Link to="/register" className="ml-1 text-orange">
            Signup here
          </Link>
        </p>

        <div className="w-full flex flex-col items-center text-small gap-y-2 text-grey2">
          <span>or</span>
          <button
            type="button"
            onClick={googleAuth}
            className="w-full flex justify-center gap-x-3 items-center rounded-3xl min-h-[50px] ml-1 text-orange border  border-primary"
          >
            <img src={google} alt="google-logo" className="w-6 object" />
            <span className="text-baseBlack text-base ">Continue with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;