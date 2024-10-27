import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const FleetManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const fleet = [
    { id: 1, name: 'Bus A', status: 'Active', type: 'Bus', routes: 'Route 1, Route 2' },
    { id: 2, name: 'Van B', status: 'Inactive', type: 'Van', routes: 'Route 3' },
    { id: 3, name: 'Bus C', status: 'Active', type: 'Bus', routes: 'Route 4, Route 5' },
    // Add more vehicles here
  ];

  const filteredFleet = fleet.filter(vehicle => {
    return (
      (filterStatus === 'All' || vehicle.status === filterStatus) &&
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalFleetSize = fleet.length;
  const activeVehicles = fleet.filter(vehicle => vehicle.status === 'Active').length;
  const inactiveVehicles = fleet.filter(vehicle => vehicle.status === 'Inactive').length;
  const averageUsageRate = 75; // in percentage
  const fuelConsumptionTrends = [10, 12, 11, 13, 14, 12, 11]; // dummy data

  const vehicleAvailabilityData = {
    labels: ['Available', 'In Use', 'Under Maintenance'],
    datasets: [
      {
        label: 'Vehicle Availability',
        data: [60, 30, 10],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const maintenanceRateData = {
    labels: ['On-Time', 'Late'],
    datasets: [
      {
        label: 'On-Time Maintenance Rate',
        data: [90, 10],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  const downtimeAnalysisData = {
    labels: ['Maintenance', 'Repair', 'Other'],
    datasets: [
      {
        label: 'Downtime Analysis',
        data: [50, 30, 20],
        backgroundColor: ['#2196f3', '#ff9800', '#9c27b0'],
      },
    ],
  };

  const tripDistanceData = {
    labels: ['Vehicle 1', 'Vehicle 2', 'Vehicle 3', 'Vehicle 4', 'Vehicle 5'],
    datasets: [
      {
        label: 'Average Trip Distance (km)',
        data: [100, 150, 120, 130, 140],
        backgroundColor: '#ff9800',
      },
    ],
  };

  const fuelEfficiencyData = {
    labels: ['Vehicle 1', 'Vehicle 2', 'Vehicle 3', 'Vehicle 4', 'Vehicle 5'],
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
      {/* Fleet Management Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Fleet Management Overview</h2>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" /> Add Vehicle
        </button>
      </div>

      {/* Fleet Summary Section */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Fleet Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Total Fleet Size</h4>
            <p className="text-2xl">{totalFleetSize}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Active Vehicles</h4>
            <p className="text-2xl">{activeVehicles}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Inactive Vehicles</h4>
            <p className="text-2xl">{inactiveVehicles}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Average Vehicle Usage Rate</h4>
            <p className="text-2xl">{averageUsageRate}%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h4 className="font-semibold">Fuel Consumption Trends</h4>
            <Line data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
              datasets: [
                {
                  label: 'Fuel Consumption (liters)',
                  data: fuelConsumptionTrends,
                  borderColor: '#4caf50',
                  backgroundColor: 'rgba(76, 175, 80, 0.2)',
                },
              ],
            }} />
          </div>
        </div>
      </div>

      {/* Fleet Performance Metrics */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Fleet Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Vehicle Availability</h4>
            <Pie data={vehicleAvailabilityData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">On-Time Maintenance Rate</h4>
            <Pie data={maintenanceRateData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Downtime Analysis</h4>
            <Pie data={downtimeAnalysisData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Average Trip Distance</h4>
            <Bar data={tripDistanceData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Fuel Efficiency</h4>
            <Bar data={fuelEfficiencyData} />
          </div>
        </div>
      </div>

      {/* Fleet Table */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Fleet List</h3>
        <div className="flex justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search vehicles..."
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
              <th className="px-4 py-2">Vehicle Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Assigned Routes</th>
            </tr>
          </thead>
          <tbody>
            {filteredFleet.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-100">
                <td className="px-4 py-2">{vehicle.name}</td>
                <td className="px-4 py-2">{vehicle.status}</td>
                <td className="px-4 py-2">{vehicle.type}</td>
                <td className="px-4 py-2">{vehicle.routes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Vehicle View (Interactive Section) */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Detailed Vehicle View</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Vehicle Profile</h4>
            <p>Model: Bus A</p>
            <p>Capacity: 50</p>
            <p>Registration: ABC-123</p>
            <p>Assigned Routes: Route 1, Route 2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Maintenance History</h4>
            <p>Last Maintenance: 01/01/2023</p>
            <p>Next Scheduled: 01/06/2023</p>
            <p>Pending Repairs: None</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Usage Patterns</h4>
            <p>Total Distance Traveled: 10,000 km</p>
            <p>Average Speed: 60 km/h</p>
            <p>Utilization Rate: 80%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Driver Assignment</h4>
            <p>Driver: John Doe</p>
            <p>Performance: 4.5/5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h4 className="font-semibold">Performance Alerts</h4>
            <p>No alerts at this time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;