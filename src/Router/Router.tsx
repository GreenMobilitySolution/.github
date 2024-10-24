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
import Register from '../pages/Authentication/Register';
import Login from '../components/Navbar/loginComponent';

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
