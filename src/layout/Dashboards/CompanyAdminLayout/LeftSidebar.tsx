import React from "react";
import {
  BarChart,
  Users,
  Truck,
  FileText,
  DollarSign,
  Settings,
  Map,
  Inbox,
  Calendar,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import NavItem from "../../../components/Dashboard/NavLink/NavItem";

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full fixed top-24 left-0 p-4 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-medium mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <NavItem
            to="overview"
            icon={<BarChart className="w-6 h-6" />}
            label="Overview"
          />
          <NavItem
            to="fleet-management"
            icon={<Truck className="w-6 h-6" />}
            label="Vehicles"
          />
          <NavItem
            to="routes-management"
            icon={<Map className="w-6 h-6" />}
            label="Routes"
          />
          <NavItem
            to="employee-management"
            icon={<Users className="w-6 h-6" />}
            label="Employee"
          />
          <NavItem
            to="finance-management"
            icon={<DollarSign className="w-6 h-6" />}
            label="Finance"
          />
          <NavItem
            to="manager-payment"
            icon={<CreditCard className="w-6 h-6" />}
            label="Payments"
          />
          <NavItem
            to="manager-reimburse"
            icon={<RefreshCw className="w-6 h-6" />}
            label="Reimburse"
          />
          <NavItem
            to="inbox"
            icon={<Inbox className="w-6 h-6" />}
            label="Inbox"
          />
          <NavItem
            to="manager-bookings"
            icon={<Calendar className="w-6 h-6" />}
            label="Bookings"
          />
          <NavItem
            to="service-performance"
            icon={<Map className="w-6 h-6" />}
            label="Performance"
          />
        </nav>
      </div>
      <div className="pl-4 mt-2">
        <nav className="flex flex-col gap-4">
          <NavItem
            to="reports-analysis"
            icon={<FileText className="w-6 h-6" />}
            label="Reports and Analysis"
          />
          <NavItem
            to="settings"
            icon={<Settings className="w-6 h-6" />}
            label="Settings"
          />
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
