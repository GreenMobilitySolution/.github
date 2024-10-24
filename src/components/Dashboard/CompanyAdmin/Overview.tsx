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

const Overview: React.FC = () => {
  // Dummy data for the charts
  const fleetUtilizationData = {
    labels: ["Buses", "Vans", "Cars"],
    datasets: [
      {
        label: "Total Fleet Size",
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  const tripData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Total Trips",
        data: [120, 150, 180, 200, 170, 160, 190],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const bookingInsightsData = {
    labels: ["Completed", "Cancelled"],
    datasets: [
      {
        label: "Bookings",
        data: [300, 50],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Total Revenue",
        data: [5000, 7000, 8000, 6000, 7500, 9000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const servicePerformanceData = {
    labels: ["On-Time", "Late"],
    datasets: [
      {
        label: "On-Time Performance",
        data: [85, 15],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  const operationalEfficiencyData = {
    labels: ["Fuel Usage", "Maintenance Costs"],
    datasets: [
      {
        label: "Operational Efficiency",
        data: [3000, 1500],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 206, 86, 0.6)"],
      },
    ],
  };

  const routeManagementData = {
    labels: ["Route 1", "Route 2", "Route 3"],
    datasets: [
      {
        label: "Top Routes",
        data: [200, 150, 100],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  const driverPerformanceData = {
    labels: ["Driver 1", "Driver 2", "Driver 3", "Driver 4", "Driver 5"],
    datasets: [
      {
        label: "Average Trip Rating",
        data: [4.5, 4.0, 4.8, 4.2, 4.6],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "On-Time Percentage",
        data: [90, 85, 95, 80, 88],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-6">
        View key metrics and statistics about your company.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fleet Utilization */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Fleet Utilization</h3>
          <Pie
            data={fleetUtilizationData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Trip Data */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Trip Data</h3>
          <Bar
            data={tripData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Booking Insights */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Booking Insights</h3>
          <Pie
            data={bookingInsightsData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Revenue Data */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Revenue Data</h3>
          <Bar
            data={revenueData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Service Performance */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Service Performance</h3>
          <Pie
            data={servicePerformanceData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Operational Efficiency */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Operational Efficiency</h3>
          <Bar
            data={operationalEfficiencyData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Route Management */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Route Management</h3>
          <Bar
            data={routeManagementData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>

        {/* Driver Performance */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Drivers Performance</h3>
          <Bar
            data={driverPerformanceData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <CompanyGetStarted />
    </div>
  );
};

export default Overview;
