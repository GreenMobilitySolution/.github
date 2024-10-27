import React, { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const CompanyPerformance: React.FC = () => {
  const [dateRange, setDateRange] = useState('Monthly');

  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Revenue ($)',
        data: [12000, 15000, 18000, 20000, 17000, 16000],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  const revenueGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue Growth (%)',
        data: [5, 10, 15, 20, 15, 10],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
      },
    ],
  };

  const fleetUtilizationData = {
    labels: ['Bus A', 'Bus B', 'Bus C', 'Van A', 'Van B'],
    datasets: [
      {
        label: 'Fleet Utilization Rate (%)',
        data: [80, 70, 90, 60, 75],
        backgroundColor: '#ff9800',
      },
    ],
  };

  const customerSatisfactionData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Customer Satisfaction Score',
        data: [4.5, 4.0, 4.8, 4.2, 4.6],
        backgroundColor: '#4caf50',
      },
    ],
  };

  const driverPerformanceData = {
    labels: ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5'],
    datasets: [
      {
        label: 'Driver Performance Score',
        data: [4.5, 4.0, 4.8, 4.2, 4.6],
        backgroundColor: '#ff5722',
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Company Performance Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Company Performance Overview</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
            <Download className="w-5 h-5 mr-2" /> Export Data
          </button>
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-300"
            >
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Annually">Annually</option>
            </select>
            <Calendar className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Revenue and Financial Performance */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Revenue and Financial Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Total Revenue</h4>
            <Line data={revenueData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Revenue Growth</h4>
            <Bar data={revenueGrowthData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Revenue by Route or Service</h4>
            {/* Add revenue by route or service chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Outstanding Payments & Refunds</h4>
            {/* Add outstanding payments & refunds chart here */}
          </div>
        </div>
      </div>

      {/* Operational Efficiency Metrics */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Operational Efficiency Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Fleet Utilization Rate</h4>
            <Bar data={fleetUtilizationData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Average Fuel/Energy Consumption</h4>
            {/* Add average fuel/energy consumption chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Maintenance Adherence</h4>
            {/* Add maintenance adherence chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Driver Efficiency</h4>
            {/* Add driver efficiency chart here */}
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Insights */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Customer Satisfaction Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Customer Satisfaction Score</h4>
            <Bar data={customerSatisfactionData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Customer Feedback Trends</h4>
            {/* Add customer feedback trends chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">On-Time Service Rate</h4>
            {/* Add on-time service rate chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Customer Demographics</h4>
            {/* Add customer demographics chart here */}
          </div>
        </div>
      </div>

      {/* Employee Performance and Safety Compliance */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Employee Performance and Safety Compliance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Driver Performance Reports</h4>
            <Bar data={driverPerformanceData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Safety Incidents</h4>
            {/* Add safety incidents chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Training Compliance</h4>
            {/* Add training compliance chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Employee Engagement Score</h4>
            {/* Add employee engagement score chart here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPerformance;