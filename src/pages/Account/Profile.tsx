import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1234567890");
  const [address, setAddress] = useState("123 Main St");
  const [city, setCity] = useState("Anytown");
  const [state, setState] = useState("CA");
  const [zip, setZip] = useState("12345");
  const [dob, setDob] = useState("1990-01-01");
  const [gender, setGender] = useState("Male");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save the updated information
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-center">Profile</h1>
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Personal Information</h2>
        <div className="flex flex-col items-center mb-6">
          <label className="font-semibold block mb-2">Profile Picture:</label>
          {editMode ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            profilePicturePreview ? (
              <img src={profilePicturePreview} alt="Profile" className="w-32 h-32 rounded-full shadow-lg" />
            ) : (
              <FaUserCircle className="w-32 h-32 text-gray-400" />
            )
          )}
        </div>
        <div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="font-semibold block mb-1">Name:</label>
            {editMode ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Email:</label>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Phone:</label>
            {editMode ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Address:</label>
            {editMode ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{address}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">City:</label>
            {editMode ? (
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{city}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">State:</label>
            {editMode ? (
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{state}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Zip Code:</label>
            {editMode ? (
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{zip}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Date of Birth:</label>
            {editMode ? (
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p>{dob}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-1">Gender:</label>
            {editMode ? (
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{gender}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          {editMode ? (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleEditToggle}
            >
              Edit Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;