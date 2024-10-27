import React from 'react';

interface RouteInfo {
  from: string;
  to: string;
  price: number;
}

interface ClientRouteCardProps {
  route: RouteInfo;
}

const ClientRouteCard: React.FC<ClientRouteCardProps> = ({ route }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-2">{route.from} to {route.to}</h3>
      <p className="text-gray-700 mb-2">Price: RWF {route.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Book Now
      </button>
    </div>
  );
};

export default ClientRouteCard;