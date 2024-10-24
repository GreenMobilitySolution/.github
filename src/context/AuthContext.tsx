import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { companies } from '../../Database/models/company';
import { users } from '../../Database/models/user';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
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
      const response = await axios.post('/login', { email, password });
      const { token, user } = response.data;
      if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      navigateBasedOnRole(user);
      }
    } catch (error) {
      // Fallback to static accounts if server is not available
      const allUsers = [...users, ...companies];
      const foundUser = allUsers.find((u) => u.email === email && u.password === password);
      if (foundUser) {
        localStorage.setItem('user', JSON.stringify(foundUser));
        setUser(foundUser);
        navigateBasedOnRole(foundUser);
      } else {
        throw new Error('Invalid credentials');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const navigateBasedOnRole = (user: any) => {
    if (user.userType === 'Driver') {
      navigate('/driver-dashboard');
    } else if (user.userType === 'Passenger') {
      navigate('/passenger-dashboard');
    } else if (user.companyName) {
      navigate('/company-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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