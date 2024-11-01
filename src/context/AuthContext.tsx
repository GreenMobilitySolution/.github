import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { companies } from '../../Database/models/company';
import { users } from '../../Database/models/user';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<Boolean | any>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const API_BASE_URL = (import.meta as any).env.VITE_REACT_APP_API_BASE_URL;

      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        const decodedToken: any = jwtDecode(token);
        const { userId, role } = decodedToken;
        const user = { userId, role, token };
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigateBasedOnRole(user);
        return true;
      }
    } catch (error: any) {
      // Fallback to static accounts if server is not available
      const allUsers = [...users, ...companies];
      const foundUser = allUsers.find((u) => u.email === email && u.password === password);
      if (foundUser) {
        localStorage.setItem('user', JSON.stringify(foundUser));
        setUser(foundUser);
        navigateBasedOnRole(foundUser);
      } 
      throw new Error(error.message);
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        logout();
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const navigateBasedOnRole = (user: any) => {
    if (user.role === 'Driver') {
      navigate('/driver-dashboard');
    } else if (user.role === 'Passenger') {
      navigate('/account');
    } else if (user.role === 'companyDriver') {
      navigate('/company-driver-dashboard');
    } else if (user.role === 'Manager') {
      navigate('/company-dashboard');
    } else if (user.role === 'Admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};