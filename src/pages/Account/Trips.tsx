import React, { useState } from 'react';
import Modal from 'react-modal';
import { QRCODE } from '../../assets/images/images';

interface Trip {
  id: number;
  destination: string;
  date: string;
  status: 'upcoming' | 'current' | 'past';
  ticketStatus: 'used' | 'canceled' | 'active';
  qrCode: string;
}

const trips: Trip[] = [
  {
    id: 1,
    destination: 'Kigali - Huye',
    date: '2024-12-01',
    status: 'upcoming',
    ticketStatus: 'active',
    qrCode: QRCODE,
  },
  {
    id: 2,
    destination: 'Nyabugogo - Downtown',
    date: '2024-11-01',
    status: 'current',
    ticketStatus: 'used',
    qrCode: QRCODE,
  },
  {
    id: 3,
    destination: 'Downtown - Nyabugogo',
    date: '2024-10-01',
    status: 'past',
    ticketStatus: 'canceled',
    qrCode: QRCODE,
  },
];

const Trips = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const openModal = (trip: Trip) => {
    setSelectedTrip(trip);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTrip(null);
  };

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-center">My Trips</h1>
      <div className="w-full max-w-6xl rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold">{trip.destination}</h3>
              <p className="text-gray-600">Date: {trip.date}</p>
              <p className={`text-sm ${trip.status === 'upcoming' ? 'text-blue-500' : trip.status === 'current' ? 'text-green-500' : 'text-gray-500'}`}>
                Status: {trip.status}
              </p>
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                onClick={() => openModal(trip)}
              >
                View Ticket
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTrip && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Ticket Information"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Ticket Information</h2>
            <div>
              <p className="mb-2">Destination: {selectedTrip.destination}</p>
              <p className="mb-2">Date: {selectedTrip.date}</p>
              <p className="mb-2">Ticket Status: {selectedTrip.ticketStatus}</p>
              <img src={selectedTrip.qrCode} alt="QR Code" className="mb-4" />
            </div>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Trips;