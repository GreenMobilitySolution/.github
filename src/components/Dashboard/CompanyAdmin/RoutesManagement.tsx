import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Line, Bar, Scatter, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const RoutesManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const routes = [
    { id: 1, name: 'Route 1', status: 'Active', distance: 10, vehicles: 5 },
    { id: 2, name: 'Route 2', status: 'Inactive', distance: 15, vehicles: 3 },
    { id: 3, name: 'Route 3', status: 'Active', distance: 20, vehicles: 7 },
    // Add more routes here
  ];

  const filteredRoutes = routes.filter(route => {
    return (
      (filterStatus === 'All' || route.status === filterStatus) &&
      route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalRoutes = routes.length;
  const activeRoutes = routes.filter(route => route.status === 'Active').length;
  const inactiveRoutes = routes.filter(route => route.status === 'Inactive').length;
  const averageDistance = (routes.reduce((acc, route) => acc + route.distance, 0) / routes.length).toFixed(1);
  const peakUsageRoutes = ['Route 1', 'Route 5', 'Route 12'];

  const passengerCountData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Passenger Count',
        data: [120, 150, 180, 200, 170, 160, 190],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  const tripDurationData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Average Trip Duration (minutes)',
        data: [30, 25, 35, 40, 20],
        backgroundColor: '#ff9800',
      },
    ],
  };

  const onTimePerformanceData = {
    labels: ['On-Time', 'Late'],
    datasets: [
      {
        label: 'On-Time Performance',
        data: [85, 15],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  const revenueData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Revenue per Route ($)',
        data: [500, 700, 600, 800, 650],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
      },
    ],
  };

  const fuelEfficiencyData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Fuel Efficiency (km/l)',
        data: [5, 6, 5.5, 6.2, 5.8],
        borderColor: '#ff5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Route Management Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Route Management Overview</h2>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" /> Add Route
        </button>
      </div>

      {/* Route Summary Section */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Route Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Total Routes</h4>
            <p className="text-2xl">{totalRoutes}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Active Routes</h4>
            <p className="text-2xl">{activeRoutes}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Inactive Routes</h4>
            <p className="text-2xl">{inactiveRoutes}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Average Distance per Route</h4>
            <p className="text-2xl">{averageDistance} km</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h4 className="font-semibold">Peak Usage Routes</h4>
            <ul>
              {peakUsageRoutes.map((route, index) => (
                <li key={index}>{route}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Route Performance Metrics */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Route Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Passenger Count (Daily)</h4>
            <Line data={passengerCountData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Average Trip Duration</h4>
            <Bar data={tripDurationData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">On-Time Performance</h4>
            <Pie data={onTimePerformanceData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Revenue per Route</h4>
            <Line data={revenueData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Distance & Fuel Efficiency</h4>
            <Scatter data={fuelEfficiencyData} />
          </div>
        </div>
      </div>

      {/* Routes Table */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Routes List</h3>
        <div className="flex justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search routes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-300"
            />
            <Search className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="py-2 px-4 rounded-lg border border-gray-300"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <Filter className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>
        </div>
        <table className="w-full bg-white border border-gray-300 table-auto">
          <thead className="bg-green-500">
            <tr>
              <th className="px-4 py-2">Route Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Distance (km)</th>
              <th className="px-4 py-2">Vehicles Assigned</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoutes.map((route) => (
              <tr key={route.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{route.name}</td>
                <td className="px-4 py-2">{route.status}</td>
                <td className="px-4 py-2">{route.distance}</td>
                <td className="px-4 py-2">{route.vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Route View (Interactive Section) */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Detailed Route View</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Route Map</h4>
            {/* Add interactive route map here */}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Vehicles Assigned</h4>
            <p className="text-2xl">15</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Traffic and Timetable Insights</h4>
            <p>Real-time traffic data and timetable comparisons will be displayed here.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h4 className="font-semibold">Passenger Feedback</h4>
            <p>Average Rating: 4.5/5</p>
            <p>Recent Feedback: "Great service!", "Always on time!", "Comfortable ride."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesManagement;