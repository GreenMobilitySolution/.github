import React from "react";
import GreenButton from "../Buttons/GreenButton";
import { useNavigate } from "react-router-dom";
// import { routes } from "../../../Database/GareRoutes";
import { busStops } from '../../../Database/BusStop/BusStops';
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { Routes } from "../../../Database/models/Routes";

interface Props {
    categoryTitle: string;
    price: number;
}

const RouteHeader: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const foundRoute = Routes.find((route) => route.id === busStops[0]?.routeId);

    const handleButtonClick = () => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
        toast.error("Please login to book a trip");
        navigate("/login");
        return;
    }
    navigate(`/bookings/select-car?price=${props.price}&direction=${foundRoute?.from}-${foundRoute?.to}`);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{props.categoryTitle}</h1>
                <p className="text-xl text-green-700 mt-2">{props.price} FRW</p>
            </div>

            <div className="p-6 w-full flex items-center justify-center rounded-lg mb-6">
                <div className="bg-gray-100 p-6 w-[50%] rounded-lg mb-6">
                    <p className="text-gray-600 text-lg mb-4">Igihe urugendo rumara mumasaha:</p>
                    <ul className="space-y-2">
                        <li className="flex justify-between text-gray-600 text-lg">
                            <span>Ubusanzwe:</span>
                            <span className="text-black">{3} Hours</span>
                        </li>
                        <li className="flex justify-between text-gray-600 text-lg">
                            <span>Ambutiyaje idakabije:</span>
                            <span className="text-black">3:30 Hours</span>
                        </li>
                        <li className="flex justify-between text-gray-600 text-lg">
                            <span>Ambutiyaje ikabije:</span>
                            <span className="text-black">{5} Hours</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <GreenButton handle={handleButtonClick}>
                    Katisha itike
                </GreenButton>
            </div>
        </div>
    );
};

export default RouteHeader;