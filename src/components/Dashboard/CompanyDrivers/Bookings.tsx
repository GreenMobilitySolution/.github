import React, { useState, useEffect } from 'react';
import { Plus, Calendar, CheckCircle, XCircle, Filter, Search } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { Html5QrcodeScanner } from 'html5-qrcode';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const CompanyDriverBookings: React.FC = () => {
  const [dateRange, setDateRange] = useState('Daily');
  const [routeStatus, setRouteStatus] = useState('On Schedule');
  const [filterStatus, setFilterStatus] = useState('All');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const qrCodeRegionId = "html5qr-code-full-region";

  const passengerList = [
    { name: 'John Doe', pickup: 'Stop 1', dropoff: 'Stop 5', status: 'Confirmed' },
    { name: 'Jane Smith', pickup: 'Stop 2', dropoff: 'Stop 6', status: 'Confirmed' },
    { name: 'Alice Johnson', pickup: 'Stop 3', dropoff: 'Stop 7', status: 'Canceled' },
    // Add more passengers here
  ];

  const filteredPassengerList = passengerList.filter(passenger => {
    return filterStatus === 'All' || passenger.status === filterStatus;
  });

  const bookedSeats = 20;
  const availableSeats = 10;

  const pickupDropoffData = {
    labels: ['Stop 1', 'Stop 2', 'Stop 3', 'Stop 4', 'Stop 5', 'Stop 6', 'Stop 7'],
    datasets: [
      {
        label: 'Pickup',
        data: [5, 10, 15, 20, 25, 30, 35],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
      {
        label: 'Drop-Off',
        data: [3, 8, 12, 18, 22, 28, 32],
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
      },
    ],
  };

  const handleScan = (decodedText: string, decodedResult: any) => {
    setScanResult(decodedText);
    setScanning(false);
  };

  const handleError = (errorMessage: string) => {
    console.error(errorMessage);
    setScanning(false);
  };

  // useEffect(() => {
  //   if (scanning) {
  //     const html5QrCodeScanner = new Html5QrcodeScanner(
  //       qrCodeRegionId, { fps: 10, qrbox: 250 }, /* verbose= */ false);
  //     html5QrCodeScanner.render(handleScan, handleError);

  //     return () => {
  //       html5QrCodeScanner.clear();
  //     };
  //   }
  // }, [scanning]);

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      {/* Driver Action Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Current Route Bookings</h2>
        <div className="flex items-center space-x-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"
            onClick={() => setScanning(true)}
          >
            Scan Ticket
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

    {/* Passenger E-Ticket Scanning and Verification */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">E-Ticket Scanning and Verification Detail</h3>
        {scanning ? (
          <div id={qrCodeRegionId} style={{ width: '100%' }} />
        ) : (
          <div
            className="mb-4"
          >
            
          </div>
        )}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-semibold">Ticket Verification Status</h4>
          <p>{scanResult ? `Ticket Data: ${scanResult}` : 'No ticket scanned yet.'}</p>
        </div>
      </div>

      {/* Route Status Summary */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Route Status: {routeStatus}</h3>
      </div>

      {/* Passenger Booking Details */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4 flex justify-between items-center">
          Passenger List
          <span className="text-lg">Total: {filteredPassengerList.length}</span>
        </h3>
        <div className="flex justify-between mb-4">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search passengers..."
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
              <option value="Confirmed">Confirmed</option>
              <option value="Canceled">Canceled</option>
            </select>
            <Filter className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Pickup and Drop-Off Locations</h4>
            <Bar data={pickupDropoffData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h4 className="font-semibold">Passenger List</h4>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Pickup</th>
                  <th className="px-4 py-2">Drop-Off</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPassengerList.map((passenger, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{passenger.name}</td>
                    <td className="px-4 py-2">{passenger.pickup}</td>
                    <td className="px-4 py-2">{passenger.dropoff}</td>
                    <td className="px-4 py-2">
                      {passenger.status === 'Confirmed' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Real-Time Seat Availability */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Real-Time Seat Availability</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Booked Seats</h4>
            <p className="text-2xl">{bookedSeats}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Available Seats</h4>
            <p className="text-2xl">{availableSeats}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Seat Allocation</h4>
            {/* Add seat allocation details here */}
          </div>
        </div>
      </div>

      {/* Current Ride Information and Route Details */}
      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-4">Current Ride Information and Route Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Ride Status</h4>
            <p>{routeStatus}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Route Stops Summary</h4>
            <ul>
              <li>Stop 1 - ETA: 10:00 AM</li>
              <li>Stop 2 - ETA: 10:15 AM</li>
              <li>Stop 3 - ETA: 10:30 AM</li>
              {/* Add more stops here */}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Estimated Completion Time</h4>
            <p>11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDriverBookings;