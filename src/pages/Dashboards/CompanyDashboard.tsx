import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/DashboardHeader";
import LeftSidebar from "../../layout/Dashboards/CompanyAdminLayout/LeftSidebar";
import RightSidebar from "../../layout/Dashboards/CompanyAdminLayout/RightSidebar";

const CompanyDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 ml-64 mr-64 overflow-y-auto">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default CompanyDashboard;
