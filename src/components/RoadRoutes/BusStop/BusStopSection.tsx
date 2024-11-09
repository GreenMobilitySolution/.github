import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { BusStop, BusStopProp } from "../../../types";
import LoadButton from "../../Buttons/LoadButton";
import { BusStopCard } from "../../Cards/BusStop/BusStop";
import { busStops } from "../../../../Database/BusStop/BusStops";
import { routes } from "../../../../Database/GareRoutes";

export function BusStopSection(props: BusStopProp) {
  const [busStopList, setBusStopList] = useState<BusStop[]>([]);
  const [viewBusStops, setViewBusStops] = useState<BusStop[]>([]);
  const [viewItems, setViewItems] = useState(3);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const foundRoute = routes.find((route) => route.id === busStops[0]?.routeId);

  useEffect(() => {
    setTimeout(() => {
      setBusStopList(busStops);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filteredBusStops = busStopList;

    if (searchTerm) {
      filteredBusStops = filteredBusStops.filter((busStop) =>
        busStop.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const busStopsToDisplay = filteredBusStops.slice(0, viewItems);
    setViewBusStops(busStopsToDisplay);
  }, [viewItems, busStopList, searchTerm]);

  return (
    <>
      <div id="bus-stops" className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">Aho baviramo/bategera</h2>
            <p className="text-gray-500">Aho baviramo/bategera:</p>
          </div>

          {/* Search Option */}
          <div className="flex justify-center gap-4 mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by bus stop name"
              className="py-2 px-4 border rounded-lg w-full max-w-md"
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <PropagateLoader color="#070f2b" />
            </div>
          ) : (
            <>
              {viewBusStops.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {viewBusStops.map((busStop) => (
                    <BusStopCard
                      key={busStop.id}
                      busStop={busStop}
                      route={{
                        from: foundRoute?.from ?? "",
                        to: foundRoute?.to ?? "",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500">
                    No bus stops found for the search query.
                  </p>
                </div>
              )}
            </>
          )}

          {!loading &&
            busStopList.length > viewItems &&
            viewBusStops.length > 0 && (
              <div className="flex justify-center mt-8">
                <LoadButton handle={handleAddMore}>More Bus Stops</LoadButton>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
