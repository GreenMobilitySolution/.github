import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Line, Bar, Pie, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const CompanyDriverRoutes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const routes = [
    { id: 1, name: 'Route 1', status: 'Active', distance: 10, vehicles: 5, passengers: 120, completedTrips: 30 },
    { id: 2, name: 'Route 2', status: 'Inactive', distance: 15, vehicles: 3, passengers: 90, completedTrips: 20 },
    { id: 3, name: 'Route 3', status: 'Active', distance: 20, vehicles: 7, passengers: 150, completedTrips: 40 },
    // Add more routes here
  ];

  const filteredRoutes = routes.filter(route => {
    return (
      (filterStatus === 'All' || route.status === filterStatus) &&
      route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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

  const feedbackData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Average Passenger Rating',
        data: [4.5, 4.0, 4.8, 4.2, 4.6],
        backgroundColor: '#4caf50',
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Driver Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Driver Route Overview</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
            <Filter className="w-5 h-5 mr-2" /> Filter Routes
          </button>
        </div>
      </div>

      <div className="pt-2">
        {/* Scheduled Routes to Work On */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Scheduled Routes to Work On</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map(route => (
              <div key={route.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg">{route.name} (ID: {route.id})</h4>
                <p className="text-gray-600">Total Passengers: {route.passengers}</p>
                <p className="text-gray-600">Completed Trips: {route.completedTrips}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Route */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Current Route</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg">Route 1 (ID: 1)</h4>
            <p className="text-gray-600">Total Passengers: 120</p>
            <p className="text-gray-600">Completed Trips: 30</p>
          </div>
        </div>

        {/* Route in Progress */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Route in Progress</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg">Route 2 (ID: 2)</h4>
            <p className="text-gray-600">Total Passengers: 90</p>
            <p className="text-gray-600">Completed Trips: 20</p>
          </div>
        </div>

        {/* Passenger Information */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Passenger Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Passenger Count per Trip</h4>
              <Line data={passengerCountData} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Booked vs. Available Seats</h4>
              {/* Add booked vs. available seats chart here */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Frequent Stops & Drop-Offs</h4>
              {/* Add frequent stops & drop-offs chart here */}
            </div>
          </div>
        </div>

        {/* Performance Metrics per Route */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Performance Metrics per Route</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">On-Time Percentage</h4>
              <Pie data={onTimePerformanceData} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Average Trip Duration</h4>
              <Bar data={tripDurationData} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Fuel/Energy Efficiency</h4>
              <Scatter data={fuelEfficiencyData} />
            </div>
          </div>
        </div>

        {/* Historical Feedback and Ratings */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Historical Feedback and Ratings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Average Passenger Rating per Route</h4>
              <Bar data={feedbackData} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Top Feedback Points</h4>
              <p className="text-gray-600">Positive: "Great service!", "Always on time!"</p>
              <p className="text-gray-600">Constructive: "Improve seating comfort."</p>
            </div>
          </div>
        </div>

        {/* Route-Specific Safety and Efficiency Reminders */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Route-Specific Safety and Efficiency Reminders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Safety Reminders</h4>
              <p className="text-gray-600">Always follow traffic rules and regulations.</p>
              <p className="text-gray-600">Ensure all passengers are seated before moving.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Incident Report Summary</h4>
              <p className="text-gray-600">No incidents reported for this route.</p>
            </div>
          </div>
        </div>

        {/* Driver Insights & Performance Across Routes */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Driver Insights & Performance Across Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Route Completion Trends</h4>
              {/* Add route completion trends chart here */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Customer Satisfaction Trends</h4>
              {/* Add customer satisfaction trends chart here */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Fuel Efficiency per Route</h4>
              {/* Add fuel efficiency per route chart here */}
            </div>
          </div>
        </div>

        {/* Detailed Route View */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Detailed Route View</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Route Map</h4>
              {/* Add interactive route map here */}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Vehicles Assigned</h4>
              <p className="text-2xl text-gray-800">15</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Traffic and Timetable Insights</h4>
              <p className="text-gray-600">Real-time traffic data and timetable comparisons will be displayed here.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md col-span-2">
              <h4 className="font-semibold text-lg mb-4">Passenger Feedback</h4>
              <p className="text-gray-600">Average Rating: 4.5/5</p>
              <p className="text-gray-600">Recent Feedback: "Great service!", "Always on time!", "Comfortable ride."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDriverRoutes;