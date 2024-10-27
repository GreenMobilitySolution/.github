import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import CompanyGetStarted from "../../../layout/CompanyAdminLayout/CompanyGetStarted";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const CompanyDriverOverview: React.FC = () => {
  // Dummy data for the charts
  const onTimeArrivalsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "On-Time Arrivals (%)",
        data: [90, 85, 95, 88],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const customerRatingsData = {
    labels: ["Safety", "Courtesy", "Punctuality"],
    datasets: [
      {
        label: "Average Rating",
        data: [4.5, 4.7, 4.6],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  const drivingEfficiencyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Fuel Efficiency (km/l)",
        data: [15, 14.5, 15.2, 14.8],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const totalRoutesData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Total Routes Completed",
        data: [10, 12, 15, 14],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const mostFrequentRouteData = {
    labels: ["Route 1", "Route 2", "Route 3"],
    datasets: [
      {
        label: "Most Frequent Route",
        data: [20, 15, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  const topStopsData = {
    labels: ["Stop 1", "Stop 2", "Stop 3", "Stop 4"],
    datasets: [
      {
        label: "Top Stops",
        data: [30, 25, 20, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const incidentFreeDaysData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Incident-Free Days",
        data: [7, 7, 7, 7],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const trainingComplianceData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Training Compliance",
        data: [5, 1],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  const shiftDurationData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Average Shift Duration (hours)",
        data: [8, 8.5, 8, 7.5],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const breakAdherenceData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Break Adherence (%)",
        data: [100, 95, 100, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Driver Action Bar */}
      <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Driver Overview</h2>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Performance Review
        </button>
      </div>

      {/* Shift Summary */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shift Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Start Time</p>
            <p className="text-xl font-semibold text-gray-800">8:00 AM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">End Time</p>
            <p className="text-xl font-semibold text-gray-800">4:00 PM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Route Assignment</p>
            <p className="text-xl font-semibold text-gray-800">Route 1</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Breaks</p>
            <p className="text-xl font-semibold text-gray-800">12:00 PM - 12:30 PM</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">On-Time Arrivals</h4>
            <Bar data={onTimeArrivalsData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Customer Ratings</h4>
            <Pie data={customerRatingsData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Driving Efficiency</h4>
            <Line data={drivingEfficiencyData} />
          </div>
        </div>
      </div>

      {/* Route Summary */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Route Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Total Routes Completed</h4>
            <Bar data={totalRoutesData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Most Frequent Route</h4>
            <Pie data={mostFrequentRouteData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Top Stops</h4>
            <Bar data={topStopsData} />
          </div>
        </div>
      </div>

      {/* Safety and Compliance Summary */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Safety and Compliance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Incident-Free Days</h4>
            <Bar data={incidentFreeDaysData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Training and Compliance</h4>
            <Pie data={trainingComplianceData} />
          </div>
        </div>
      </div>

      {/* Shift and Break Analysis */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shift and Break Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Average Shift Duration</h4>
            <Bar data={shiftDurationData} />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium text-gray-600 mb-2">Break Adherence</h4>
            <Bar data={breakAdherenceData} />
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Assignments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Next Scheduled Shift</p>
            <p className="text-xl font-semibold text-gray-800">Tomorrow, 8:00 AM - 4:00 PM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Assigned Vehicle</p>
            <p className="text-xl font-semibold text-gray-800">Bus A</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Assigned Route</p>
            <p className="text-xl font-semibold text-gray-800">Route 1</p>
          </div>
        </div>
      </div>

      <CompanyGetStarted />
    </div>
  );
};

export default CompanyDriverOverview;