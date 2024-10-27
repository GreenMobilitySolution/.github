import React, { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Bookings: React.FC = () => {
  const [dateRange, setDateRange] = useState('Monthly');

  const totalBookingsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Bookings',
        data: [120, 150, 180, 200, 170, 160],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  const bookingGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Booking Growth Rate (%)',
        data: [5, 10, 15, 20, 15, 10],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
      },
    ],
  };

  const bookingChannelsData = {
    labels: ['App', 'Website', 'In-Person'],
    datasets: [
      {
        label: 'Booking Channels',
        data: [60, 30, 10],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const serviceTypesData = {
    labels: ['One-Way', 'Round Trip', 'Subscription'],
    datasets: [
      {
        label: 'Service Types',
        data: [70, 20, 10],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
      },
    ],
  };

  const routePopularityData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Route Popularity',
        data: [100, 150, 120, 130, 140],
        backgroundColor: '#ff9800',
      },
    ],
  };

  const bookingStatusData = {
    labels: ['Active', 'Canceled', 'Completed'],
    datasets: [
      {
        label: 'Booking Status',
        data: [70, 20, 10],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
      },
    ],
  };

  const customerDemographicsData = {
    labels: ['18-25', '26-35', '36-45', '46-60', '60+'],
    datasets: [
      {
        label: 'Customer Demographics',
        data: [30, 40, 20, 10, 5],
        backgroundColor: ['#4caf50', '#ffeb3b', '#ff9800', '#2196f3', '#9c27b0'],
      },
    ],
  };

  const revenuePerBookingTypeData = {
    labels: ['One-Way', 'Round Trip', 'Subscription'],
    datasets: [
      {
        label: 'Revenue per Booking Type ($)',
        data: [5000, 7000, 3000],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Bookings Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Bookings Overview</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
            <Plus className="w-5 h-5 mr-2" /> Add New Booking
          </button>
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-300"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Custom">Custom</option>
            </select>
            <Calendar className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Booking Trends and Patterns */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Booking Trends and Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Total Bookings</h4>
            <Line data={totalBookingsData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Booking Growth Rate</h4>
            <Bar data={bookingGrowthData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Peak Booking Times</h4>
            {/* Add peak booking times chart here */}
          </div>
        </div>
      </div>

      {/* Booking Types and Sources */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Booking Types and Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Booking Channels</h4>
            <Pie data={bookingChannelsData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Service Types</h4>
            <Pie data={serviceTypesData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Route Popularity</h4>
            <Bar data={routePopularityData} />
          </div>
        </div>
      </div>

      {/* Booking Status Overview */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Booking Status Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Active vs. Canceled Bookings</h4>
            <Pie data={bookingStatusData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Refunded Bookings</h4>
            {/* Add refunded bookings chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Pending vs. Confirmed</h4>
            {/* Add pending vs. confirmed chart here */}
          </div>
        </div>
      </div>

      {/* Customer Insights */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Customer Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Customer Demographics</h4>
            <Pie data={customerDemographicsData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Frequent Bookers</h4>
            {/* Add frequent bookers chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">New vs. Returning Customers</h4>
            {/* Add new vs. returning customers chart here */}
          </div>
        </div>
      </div>

      {/* Revenue from Bookings */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Revenue from Bookings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Revenue per Booking Type</h4>
            <Bar data={revenuePerBookingTypeData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Revenue per Route</h4>
            {/* Add revenue per route chart here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Outstanding Payments</h4>
            {/* Add outstanding payments chart here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;