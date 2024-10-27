import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/LandingPage/Home";
import SearchPage from "../pages/searchPage";
import NotFound from "./NotFound";
import SingleCategoryPage from "../pages/CategoryPage";
import SingleRoutePage from "../pages/RideRoutes/SingleRoute";
import BookingPage from "../pages/Bookings/BookingPage";
import Register from "../pages/Authentication/RegisterPassenger";
import GetStarted from "../pages/Authentication/GetStarted";
import RegisterCompany from "../pages/Authentication/RegisterCompany";
import RegisterDriver from "../pages/Authentication/RegisterDriver";
import RegisterPassenger from "../pages/Authentication/RegisterPassenger";
import Login from "../pages/Authentication/Login";
import DriverDashboard from "../pages/Dashboards/CompanyDriverDashboard";
import PassengerDashboard from "../pages/Dashboards/PassengerDashboard";
import CompanyDashboard from "../pages/Dashboards/CompanyDashboard";
import NotAllowed from "./NotAllowed";
import SecuredRoutes from "../components/Security/SecuredRoutes";
import AIAssistant from "../components/Dashboard/CompanyAdmin/AIAssistant";
import EmployeeManagement from "../components/Dashboard/CompanyAdmin/EmployeeManagement";
import FinanceManagement from "../components/Dashboard/CompanyAdmin/FinanceManagement";
import FleetManagement from "../components/Dashboard/CompanyAdmin/FleetManagement";
import ReportsAnalysis from "../components/Dashboard/CompanyAdmin/ReportsAnalysis";
import Settings from "../components/Dashboard/CompanyAdmin/Settings";
import RoutesManagement from "../components/Dashboard/CompanyAdmin/RoutesManagement";
import Overview from "../components/Dashboard/CompanyAdmin/Overview";
import CompanyPerformance from "../components/Dashboard/CompanyAdmin/CompanyPerformance";
import Bookings from "../components/Dashboard/CompanyAdmin/Bookings";
import CompanyDriverOverview from '../components/Dashboard/CompanyDrivers/Overview';
import CompanyDriverDashboard from "../pages/Dashboards/CompanyDriverDashboard";
import CompanyDriverRoutes from '../components/Dashboard/CompanyDrivers/Routes';
import CompanyDriverBookings from '../components/Dashboard/CompanyDrivers/Bookings';

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
          <MainLayout>
            <PageTitle title="Mobylife" />
            <Home />
          </MainLayout>
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
        path="/driver-dashboard"
        element={
          <>
            <PageTitle title="MobyLife | Driver dashboard" />
            <SecuredRoutes allowedRoles={["Driver"]}>
              <DriverDashboard />
            </SecuredRoutes>
          </>
        }
      />

      <Route
        path="/passenger-dashboard"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Passenger account" />
            <SecuredRoutes allowedRoles={["Passenger"]}>
              <PassengerDashboard />
            </SecuredRoutes>
          </MainLayout>
        }
      />

      {/* COMPANY ADMIN  DASHBOARD*/}
      <Route
        path="/company-dashboard/*"
        element={
          <SecuredRoutes allowedRoles={["Company"]}>
            <CompanyDashboard />
          </SecuredRoutes>
        }
      >
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="fleet-management" element={<FleetManagement />} />
        <Route path="routes-management" element={<RoutesManagement />} />
        <Route path="employee-management" element={<EmployeeManagement />} />
        <Route path="reports-analysis" element={<ReportsAnalysis />} />
        <Route path="finance-management" element={<FinanceManagement />} />
        <Route path="ai-assistant" element={<AIAssistant />} />
        <Route path="settings" element={<Settings />} />
        <Route path="service-performance" element={<CompanyPerformance />} />
        <Route path="manager-bookings" element={<Bookings />} />
      </Route>

      {/* COMPANY DRIVER DASBOARD */}
      <Route
        path="/company-driver-dashboard/*"
        element={
          <SecuredRoutes allowedRoles={["Company"]}>
            <CompanyDriverDashboard />
          </SecuredRoutes>
        }
      >
        <Route index element={<CompanyDriverOverview />} />
        <Route path="company-overview" element={<CompanyDriverOverview />} />
        <Route path="company-driver-routes" element={<CompanyDriverRoutes />} />
        <Route path="ai-assistant" element={<AIAssistant />} />
        <Route
          path="company-driver-bookings"
          element={<CompanyDriverBookings />}
        />
      </Route>

      <Route
        path="/single-route/:id"
        element={
          <MainLayout>
            <PageTitle title="MobyLife | Single route" />
            <SingleRoutePage />
          </MainLayout>
        }
      />

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
            <SingleCategoryPage />
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
      <Route path="/not-allowed" element={<NotAllowed />} />
    </Routes>
  );
};

export default Router;
