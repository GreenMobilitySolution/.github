import React from 'react';
import { BarChart, Users, Truck, FileText, DollarSign, Settings, Map, Inbox, Calendar, CreditCard, RefreshCw } from 'lucide-react';
import NavItem from '../../components/Dashboard/NavLink/NavItem';

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full fixed top-24 left-0 p-4 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-medium mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <NavItem to="company-overview" icon={<BarChart className="w-6 h-6" />} label="Overview" />
          <NavItem to="company-driver-bookings" icon={<Calendar className="w-6 h-6" />} label="Bookings" />
          <NavItem to="fleet-management" icon={<Truck className="w-6 h-6" />} label="Vehicles" />
          <NavItem to="company-driver-routes" icon={<Map className="w-6 h-6" />} label="Routes" />
          <NavItem to="manager-payment" icon={<CreditCard className="w-6 h-6" />} label="Payments" />
          <NavItem to="inbox" icon={<Inbox className="w-6 h-6" />} label="Inbox" />        
          <NavItem to="service-performance" icon={<Map className="w-6 h-6" />} label="Performance" />
        </nav>
      </div>
      <div className="pl-4 mt-2">
        <nav className="flex flex-col gap-4">
          <NavItem to="reports-analysis" icon={<FileText className="w-6 h-6" />} label="Reports and Analysis" />
          <NavItem to="settings" icon={<Settings className="w-6 h-6" />} label="Settings" />
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;