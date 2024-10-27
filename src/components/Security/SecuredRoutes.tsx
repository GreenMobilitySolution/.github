import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

interface SecuredRoutesProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const SecuredRoutes: React.FC<SecuredRoutesProps> = ({ children }) => {
  // Temporarily disable access control
  return <>{children}</>;
};


// const SecuredRoutes: React.FC<SecuredRoutesProps> = ({ children, allowedRoles }) => {
//   const { user } = useAuth();

//   if (!user) {
//     toast.error('You need to login to access this page');
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.userType) && !allowedRoles.includes(user.companyName ? 'Company' : '')) {
//     toast.error('You do not have permission to access this page');
//     return <Navigate to="/not-allowed" />;
//   }

//   return <>{children}</>;
// };

export default SecuredRoutes;