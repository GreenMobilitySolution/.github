import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  BarChart,
  Users,
  Truck,
  FileText,
  DollarSign,
  Cpu,
  Settings,
  Briefcase,
  ClipboardList,
  Map,
} from "lucide-react";
import DashboardCard from "../../components/Cards/Dashboard/DashboardCard";

const CompanyGetStarted: React.FC = () => {
  return (
    <div className="mt-7">
      {/* Main Content */}
      <div className="mt-5 flex-1 flex flex-col">
        <h1 className="text-2xl font-bold mt-5 mb-4">
          We think you’re gonna like it here.
        </h1>
        <p className="mb-6">
          We’ve suggested some tasks here in your organization's overview to
          help you get started.
        </p>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            icon={<Truck className="w-10 h-10 text-green-500" />}
            title="Fleet Management"
            description="Manage your vehicles and routes."
          />

          <DashboardCard
            icon={<Map className="w-10 h-10 text-blue-300" />}
            title="Routes Management"
            description="Manage routes."
          />
          <DashboardCard
            icon={<Users className="w-10 h-10 text-green-300" />}
            title="Employee Management"
            description="Manage employees, roles, and permissions."
          />
          <DashboardCard
            icon={<FileText className="w-10 h-10 text-purple-500" />}
            title="Reports and Analysis"
            description="View and generate reports, use AI Assistant for analysis."
          />
          <DashboardCard
            icon={<DollarSign className="w-10 h-10 text-yellow-500" />}
            title="Finance Management"
            description="Manage financial operations."
          />
          <DashboardCard
            icon={<Cpu className="w-10 h-10 text-red-500" />}
            title="AI Assistant"
            description="Access AI Assistant for sophisticated operations."
          />
          <DashboardCard
            icon={<Settings className="w-10 h-10 text-gray-500" />}
            title="Settings"
            description="Configure company settings and preferences."
          />
          <DashboardCard
            icon={<Briefcase className="w-10 h-10 text-teal-500" />}
            title="Projects"
            description="Manage company projects and initiatives."
          />
          <DashboardCard
            icon={<ClipboardList className="w-10 h-10 text-indigo-500" />}
            title="Tasks"
            description="Manage tasks and to-do lists for employees."
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyGetStarted;
