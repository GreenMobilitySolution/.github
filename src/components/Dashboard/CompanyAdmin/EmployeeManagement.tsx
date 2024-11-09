import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { employees, overallRatingData, recentPromotionsData, timeTrackingData, topPerformersData, underperformersData } from '../../../../Database/Employee/CompanyEmployee';
import { FaUserCircle } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import toast from 'react-hot-toast';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const EmployeeManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
   password: '',
    name: '',
    role: 'Driver',
    department: '',
    status: 'Active',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const API_BASE_URL = (import.meta as any).env.VITE_REACT_APP_API_BASE_URL;

      if (!API_BASE_URL) {
      toast.error('Backend URL is not available');
      return;
      }
      const token = localStorage.getItem('token');
      
      if (!newEmployee.address || !newEmployee.department || !newEmployee.email || !newEmployee.name || !newEmployee.password || !newEmployee.phone || !newEmployee.role || !newEmployee.status) {
        toast.error('Please fill in all fields');
        return;
      }
      const response = await axios.post(
        `${API_BASE_URL}/staff/add`,
        newEmployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200){
        toast.success(response.data.message);
        }

    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response?.data?.message || 'Something went wrong, please try again.';
      toast.error(errorMessage);
    }
    console.log({newEmployee});
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className='flex flex-row justify-between p-4 shadow-md bg-white gap-10 mb-5 justify-between'>
        <h2 className="text-2xl font-semibold">Employee Management</h2>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-5 h-5 mr-2" /> Add Employee
        </button>
      </div>

      <div className="mb-5 rounded-lg border border-gray-200 p-4">
        <h3 className="text-xl font-medium mb-5">Performance Analytics</h3>
        <div className='flex flex-wrap gap-10 mt-2 mb-5 justify-between'>
          <div className="mb-4 w-1/4 rounded-lg border border-gray-300 p-3">
            <h4 className="font-semibold">Overall Rating</h4>
            <Pie data={overallRatingData} width={100} height={100} />
          </div>
          <div className="mb-4 w-1/3 rounded-lg border border-gray-300 p-3">
            <h4 className="font-semibold">Top Performers</h4>
            <Bar data={topPerformersData} />
          </div>
          <div className="mb-4 w-1/4 rounded-lg border border-gray-300 p-3">
            <h4 className="font-semibold">Underperformers</h4>
            <Bar data={underperformersData} />
          </div>
          <div className="mb-4 w-1/4 rounded-lg border border-gray-300 p-3">
            <h4 className="font-semibold">Recent Promotions</h4>
            <Pie data={recentPromotionsData} width={60} height={60} />
          </div>
          <div className="mb-4 w-1/3 rounded-lg border border-gray-300 p-3">
            <h4 className="font-semibold">Time Tracking Overview</h4>
            <Bar data={timeTrackingData} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex w-full">
        <div className='rounded-lg border border-gray-300 p-4'>
          {/* Employee List Table */}
          <div className='flex flex-row  justify-between gap-10 mb-5'>
            <h3 className="text-xl font-semibold mb-4">Employee List</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg flex items-center">
                  <Filter className="w-5 h-5 mr-2" /> Filter Options
                </button>
                {/* Dropdown content */}
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg hidden">
                  {/* Add filter options here */}
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 px-4 rounded-lg border border-gray-300"
                />
                <Search className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          <table className="w-full bg-white border border-gray-300 table-auto">
            <thead className="bg-green-500">
              <tr>
                <th className="px-4 py-2">password</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <FaUserCircle className="w-10 h-14 rounded-full text-gray-400" />
                  </td>
                  <td className="px-4 py-2">{employee.name}</td>
                  <td className="px-4 py-2">{employee.position}</td>
                  <td className="px-4 py-2">{employee.department}</td>
                  <td className="px-4 py-2">{employee.status}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline ml-2">Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Detail Panel */}
      <div className="fixed right-0 top-20 bottom-0 bg-white shadow-md rounded-lg p-4 w-1/3 hidden">
        <h3 className="text-xl font-semibold mb-4">Employee Details</h3>
        <div className="mb-4">
          <h4 className="font-semibold">Personal Information</h4>
          {/* Add personal information here */}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Performance History</h4>
          {/* Add performance history here */}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Assigned Tasks</h4>
          {/* Add assigned tasks here */}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Leave History</h4>
          {/* Add leave history here */}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Notes</h4>
          {/* Add notes here */}
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Edit</button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-lg">Message</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Assign Task</button>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-2/3">
            <h3 className="text-xl font-semibold mb-4">Add New Employee</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Employee Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Employee Role</label>
                  <select
                    name="role"
                    value={newEmployee.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="Driver">Driver</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Ticket Assistant">Ticket Assistant</option>
                    <option value="Ticket Agent">Ticket Agent</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Status</label>
                  <select
                    name="status"
                    value={newEmployee.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={newEmployee.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Deafault password</label>
                  <input
                    type="text"
                    name="password"
                    value={newEmployee.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;