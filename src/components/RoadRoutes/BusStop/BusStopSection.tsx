import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { BusStop, BusStopProp } from "../../../../lib";
import LoadButton from "../../Buttons/LoadButton";
import { BusStopCard } from "../../Cards/BusStop/BusStop";
import { busStops } from '../../../../Database/BusStop/BusStops';
import { routes } from "../../../../Database/GareRoutes";
import { useNavigate } from "react-router-dom";
import GreenButton from "../../Buttons/GreenButton";

export function BusStopSection(props: BusStopProp) {
  const [busStopList, setBusStopList] = useState<BusStop[]>([]);
  const [viewBusStops, setViewBusStops] = useState<BusStop[]>([]);
  const [viewItems, setViewItems] = useState(3);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  const foundRoute = routes.find((route) => route.id === busStops[0]?.routeId);

  const handleButtonClick = () => {
    navigate(`/bookings/select-car?price=${props.price}&direction=${foundRoute?.from}-${foundRoute?.to}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setBusStopList(busStops);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const busStopsToDisplay = busStopList.slice(0, viewItems);
    setViewBusStops(busStopsToDisplay);
  }, [viewItems, busStopList]);

  return (
    <>
      <div id="bus-stops">
        <div className="flex p-10 flex-col items-center justify-around gap-y-8 py-8 mt-5 xmd:px-8 lg:px-16" id="routes">
          <div>
          <h1 className="text-2xl font-medium">{props.CategoryTitle}   <span className="ml-2 text-green-700"> {"  "}  {props.price} FRW</span></h1>
          <div className="flex justify-left flex-col items-left mt-5 mb-5">
          <p className="text-gray-500 text-left text-l">Igihe urugendo rumara mumasaha:</p>
          <ul>
            <li className="text-gray-500 text-left text-l">Ubusanzwe: <span className="text-black text-right text-l">{3} Hours</span></li>
            <li className="text-gray-500 text-left text-l">Ambutiyaje idakabije: <span className="text-black text-right text-l">3:30 Hours</span></li>
            <li className="text-gray-500 text-left text-l">Ambutiyaje ikabije: <span className="text-black text-right text-l">{5} Hours</span></li>
          </ul>
          </div>
          <div className="flex items-center justify-center mt-2">
          <GreenButton handle={handleButtonClick} >
              Katisha itike
          </GreenButton>
          </div>
          </div>
          <div className="bus-stop w-full">
            <p className="text-gray-500 text-left mx-10 text-lg">Aho baviramo/bategera:</p>
          </div>

          {loading && (
            <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
              <PropagateLoader color="#070f2b" />
            </div>
          )}

          {!loading && (
            <div className="w-[85%] flex p-10 border rounded-lg bg-gray-100 ">
              <div className="w-full flex gap-y-10 justify-center flex-wrap px-2 xmd:px-0">
                {viewBusStops.map((busStop) => (
                  <BusStopCard busStop={busStop} route={{
                    from: foundRoute?.from ?? '',
                    to: foundRoute?.to ?? ''
                  }} />
                ))}
              </div>
            </div>
          )}
        </div>
        {!loading && busStopList.length > viewItems && (
          <div className="w-full flex items-center justify-center p-12">
            <LoadButton handle={handleAddMore}>More Bus Stops</LoadButton>
          </div>
        )}
      </div>
    </>
  );
}