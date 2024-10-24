import React from 'react';

const PassengerDashboard: React.FC = () => {
  return (
    <div className="min-h-[85vh] h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Passenger Dashboard</h1>
      <p>Welcome to the Passenger Dashboard. Here you can manage your account info, trips, account balance, and more.</p>
      <div className="w-full max-w-4xl mt-6">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Info</h2>
          {/* Add account info management features here */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Trips</h2>
          {/* Add trip management features here */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
          {/* Add account balance management features here */}
        </div>
        {/* Add more passenger-specific features here */}
      </div>
    </div>
  );
};

export default PassengerDashboard;