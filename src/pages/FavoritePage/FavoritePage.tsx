import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import ClientRouteCard from '../../components/Cards/ClientRouteCard';
import ConfirmDeletePopup from '../../components/PopUps/ConfirmDeletePopup';

function FavoritePage() {
  const [favoriteRoutes, setFavoriteRoutes] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState<any[]>([]); // Replace `any` with the appropriate type for your routes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate fetching favorite routes
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Set dummy routes
        const dummyRoutes = [
          { routeInfo: { from: 'Nyabugogo', to: 'Downtown', price: 100 } },
          { routeInfo: { from: 'Kimironko', to: 'Gikondo', price: 200 } },
        ];
        setRoutes(dummyRoutes);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch favorite routes');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const routeCards: JSX.Element[] = [];
    routes.forEach((route, index) => {
      routeCards.push(<ClientRouteCard route={route.routeInfo} key={index} />);
    });
    setFavoriteRoutes(routeCards);
  }, [routes]);

  const clearAll = () => {
    setRoutes([]);
    setFavoriteRoutes([]);
  };

  return (
    <div className="text-black py-10 px-6 bg-gray-100 flex justify-center">
      <div className="w-[90%] p-4 flex flex-col min-h-[480px]">
        <div className="flex justify-between items-center mb-8 xmd:px-8">
          {routes.length > 0 && <h2 className="font-medium text-[25px]">Favorite Routes</h2>}
          {routes.length > 1 && (
            <div>
              <ConfirmDeletePopup
                trigger={<p className=" text-[16px] hover:underline cursor-pointer">Clear All</p>}
                title={`Confirm removing all routes from your favorites`}
                body={`Are you sure you want to remove all routes from your favorites?`}
                onSubmit={clearAll}
              />
            </div>
          )}
        </div>
        {!loading && favoriteRoutes.length > 0 && (
          <div className="w-full flex gap-y-10 justify-center flex-wrap gap-x-3 px-6 xmd:px-0">{favoriteRoutes}</div>
        )}

        {!loading && routes.length === 0 && (
          <p className="text-[20px] font-medium self-center">Your favorite routes list is empty.</p>
        )}

        {loading && (
          <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
            <PropagateLoader color="#070f2b" />
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;