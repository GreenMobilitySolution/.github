import { useState, useEffect } from "react";
import CategoriesMenu from "../../components/Menu/CategoriesMenu";
import HeroSection from "../../components/Banners/UpdateSection";
import { routes } from "../../../Database/GareRoutes";
import { CategoryGareSection } from "../../components/CategoryGaresSection";
import { FeedbackForSystem } from "../../components/Feedback/FeedbackForSystem";
import { SystemFeedback } from "../../../Database/Feedback/SystemFeedback";
import { PropagateLoader } from "react-spinners";
import LoadButton from "../../components/Buttons/LoadButton";
import { userIconUrl } from "../../assets/images/images";
import GreenButton from "../../components/Buttons/GreenButton";
import { Routes } from "../../../Database/models/Routes";

export interface Route {
  id: string;
  from: string;
  to: string;
  duration?: string;
  price?: number;
}

const Home = () => {
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [visibleFeedbackCount, setVisibleFeedbackCount] = useState(3);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [visibleRoutesCount, setVisibleRoutesCount] = useState(5);
  const [intercityRoutes, setIntercityRoutes] = useState<Route[]>([]);
  const [upCountryRoutes, setUpCountryRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const intercityRoutes = Routes.filter((route) => route.operate === "kigali");
    const upCountryRoutes = Routes.filter((route) => route.operate === "upCountry sides");
    setIntercityRoutes(intercityRoutes);
    setUpCountryRoutes(upCountryRoutes);
  }, []);

  const handleFilter = () => {
    const filtered = Routes.filter(
      (route) =>
        route.from.toLowerCase().includes(from.toLowerCase()) &&
        route.to.toLowerCase().includes(to.toLowerCase())
    );
    setFilteredRoutes(filtered);
    setSearchClicked(true);
    setVisibleRoutesCount(5);
  };

  const handleLoadMoreRoutes = () => {
    setVisibleRoutesCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingFeedback(false);
    }, 1000); 
  }, []);

  const handleLoadMoreFeedback = () => {
    setVisibleFeedbackCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="relative text-baseBlack">
      <div className="hidden xmd:flex">
        {/* <CategoriesMenu /> */}
      </div>
      <div>
        <HeroSection />
      </div>
      {/* Filter Section */}
      <div className="items-center m-6 gap-3">
        <h1 className="text-2xl font-medium m-8 text-center text-green-700">Shaka Umuhora</h1>
        <div className="flex justify-center items-center gap-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="from">
              Aho urikuva
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="to">
              Aho urikujya
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <GreenButton
            handle={handleFilter}
            disabled={!from || !to}
          >
            Shaka
          </GreenButton>
        </div>
      </div>

      {/* Routes Section */}
      {searchClicked && (
        <div className="flex flex-col justify-center items-center gap-5 mt-8">
          <h2 className="text-2xl font-medium mb-4">Imihora ibonetse</h2>
          <div className="flex justify-center items-center ">
          {filteredRoutes.length > 0 ? (
            <ul>
              {filteredRoutes.slice(0, visibleRoutesCount).map((route) => (
                <li key={route.id} className="mb-2">
                  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">
                      {route.from} to {route.to}
                    </p>
                    <p className="text-gray-600">Price: {route.price} FRW</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Nta mihora ibonetse.</p>
          )}
          {filteredRoutes.length > visibleRoutesCount && (
            <button
              onClick={handleLoadMoreRoutes}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Load More
            </button>
          )}
        </div>
        </div>
      )}

      {/* Kigali Transportation */}
      <CategoryGareSection
        Routes={intercityRoutes}
        CategoryTitle="Ingendo zo mumugi wa Kigali"
      />
      {/* Rwanda Sides Transportation */}
      <CategoryGareSection Routes={upCountryRoutes} CategoryTitle="Ingendo zo Muntara" />
      <div className="w-full flex flex-col mb-10 items-center gap-5">
        <h1 className="text-2xl mb-5 mt-5 font-medium">
          Reba icyo abakoresha iyi systeme bayivugaho!
        </h1>
        <div className="w-[85%] flex flex-wrap m-5 justify-center">
          {loadingFeedback ? (
            <div
              className="w-full flex justify-center px-6 py-20"
              data-testid="loading-spinner"
            >
              <PropagateLoader color="#070f2b" />
            </div>
          ) : (
            <>
              <div className="w-full flex flex-wrap justify-center gap-5">
                {SystemFeedback.slice(0, visibleFeedbackCount).map(
                  (feedback, index) => (
                    <FeedbackForSystem
                      key={index}
                      userPhoto={userIconUrl}
                      userName={feedback.userName}
                      message={feedback.message}
                      date={feedback.date}
                      rating={feedback.rating}
                    />
                  )
                )}
              </div>
            </>
          )}
        </div>
        {!loadingFeedback && visibleFeedbackCount < SystemFeedback.length && (
          <LoadButton handle={handleLoadMoreFeedback}>Izindi</LoadButton>
        )}
      </div>
    </div>
  );
};

export default Home;