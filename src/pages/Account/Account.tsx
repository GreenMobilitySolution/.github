import React from 'react';

const PassengerAccount: React.FC = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Manage your Account</h1>
      <p className="text-lg mb-8 text-center">Manage your balance, and more.</p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Account Balance */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
          <div className="mb-4">
            <p className="font-semibold">Current Balance:</p>
            <p>RWF 50,000</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">Add Funds</button>
        </div>

            {/* Account Balance */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment methods</h2>
          <div className="mb-4">
            <p className="font-semibold">MOMO</p>
            <p className="font-semibold">Airtel Money</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">Add more methods</button>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="mb-4">
            <p className="font-semibold">Recent Notifications:</p>
            <ul className="list-disc list-inside">
              <li>Your trip to Downtown is confirmed.</li>
              <li>Your account balance was updated.</li>
            </ul>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">View All Notifications</button>
        </div>

        {/* Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="mb-4">
            <p className="font-semibold">Language:</p>
            <select className="w-full p-2 border rounded-lg">
              <option>English</option>
              <option>Kinyarwanda</option>
              <option>French</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Notifications:</p>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email Notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              SMS Notifications
            </label>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Save Settings</button>
        </div>

        {/* Support */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <p className="mb-4">Need help? Contact our support team for assistance.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerAccount;