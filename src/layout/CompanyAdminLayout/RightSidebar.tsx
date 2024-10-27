import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RightSidebar: React.FC = () => {
  // Dummy data for charts
  const usageStatisticsData = {
    labels: ['Active Vehicles', 'Trips in Progress'],
    datasets: [
      {
        label: 'Current Status',
        data: [50, 20],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const performanceTrendsData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Daily Trip Averages',
        data: [120, 150, 180, 200, 170, 160, 190],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="w-64 bg-white shadow-md h-full fixed top-24 right-0 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">In Real Time</h2>
      </div>

      {/* Quick Access Links */}
      <div className="mb-4">
        <h3 className="text-l font-semibold mb-2">Quick Access</h3>
        <ul className="list-disc list-inside">
          <li className="text-sm">Route Management</li>
          <li className="text-sm">Trip Scheduling</li>
          <li className="text-sm">Vehicle Updates</li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div className="mb-4">
        <h3 className="text-l font-semibold mb-2">Recent Activity</h3>
        <ul className="list-disc list-inside">
          <li className="text-sm">Updated Route 5</li>
          <li className="text-sm">Added new vehicle</li>
          <li className="text-sm">Scheduled maintenance</li>
        </ul>
      </div>

      {/* Usage Statistics */}
      <div className="mb-4">
        <h3 className="text-l font-semibold mb-2">Usage Statistics</h3>
        <Bar data={usageStatisticsData} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}` } } } }} />
      </div>

      {/* Performance Trends */}
      <div className="mb-4">
        <h3 className="text-l font-semibold mb-2">Performance Trends</h3>
        <Bar data={performanceTrendsData} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${context.raw}` } } } }} />
      </div>
    </div>
  );
};

export default RightSidebar;