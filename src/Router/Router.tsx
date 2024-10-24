import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/LandingPage/Home';
import SearchPage from '../pages/searchPage';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import SingleCategoryPage from '../pages/CategoryPage';
import SingleRoutePage from '../pages/RideRoutes/SingleRoute';
import BookingPage from '../pages/Bookings/BookingPage';
import Register from '../pages/Authentication/RegisterPassenger';
import GetStarted from '../pages/Authentication/GetStarted';
import RegisterCompany from '../pages/Authentication/RegisterCompany';
import RegisterDriver from '../pages/Authentication/RegisterDriver';
import RegisterPassenger from '../pages/Authentication/RegisterPassenger';
import Login from '../pages/Authentication/Login';

const Router = () => {
  const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
              <MainLayout>
                <PageTitle title="Mobylife" />
                <Home />
              </MainLayout>
          </>
        }
      />

      <Route
        path="/register"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Register" />
            <Register />
          </MainLayout>
        }
      />

      <Route
        path="/get-started"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Get Started" />
            <GetStarted />
          </MainLayout>
        }
      />

      <Route
        path="/register-company"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Register Company" />
            <RegisterCompany />
          </MainLayout>
        }
        />

      <Route
        path="/register-passenger"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Register Passenger" />
            <RegisterPassenger />
          </MainLayout>
        }
      />

      <Route
        path="/register-driver"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Register Driver" />
            <RegisterDriver />
          </MainLayout>
        }
      />


      <Route
        path="/profile"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Profile" />
             <Navigate to="/" />
          </MainLayout>
        }
      />

    <Route
        path="/login"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Login" />
            <Login />
          </MainLayout>
        }
      />

      <Route 
      path="/single-route/:id" 
      element={
        <MainLayout>
          <PageTitle title="MobyLife | Single route" />
          <SingleRoutePage />
        </MainLayout>
      } 
      />

    {/* <Route path="/" element={<BusStopSection />} /> */}
    
      <Route 
          path="/bookings/select-car" 
          element={
            <MainLayout>
              <BookingPage />
            </MainLayout>
        } 
      />

      <Route 
      path="/category/:categoryName" 
      element={
        <MainLayout>
        <SingleCategoryPage/>
        </MainLayout>
          } 
      />
      
      <Route
        path="/search"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Search" />
            <SearchPage />
          </MainLayout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
