import React, { useState } from "react";
import { GareForCategoryCardProps } from "../../../../lib";
import { RouteForGareCard } from "../RouteCards/GareRouteCard";
import LoadButton from "../../Buttons/LoadButton";

export const GareForCategoryCard: React.FC<GareForCategoryCardProps> = ({ Routes, GareTitle }) => {
  const [viewItems, setViewItems] = useState(5);

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 5);
  };

  const displayedRoutes = Routes.slice(0, viewItems);

  return (
    <div className="border p-4 rounded-lg shadow-md w-[20%]">
      <h2 className="text-xl font-semibold mb-4"><span className="text-sm text-gray-500">Uva/Ujya</span> {GareTitle}</h2>
      <div className="flex flex-col gap-y-4">
        {displayedRoutes.map((route) => (
          <RouteForGareCard key={route.id} id={route.id} from={route.from} to={route.to} />
        ))}
      </div>
      {Routes.length > viewItems && (
        <div className="w-full flex items-center justify-center p-4">
          <LoadButton handle={ handleAddMore }>Izindi Ngendo</LoadButton>
        </div>
      )}
    </div>
  );
};
{/* <BusStopCard key={route.id} id={route.id} from={route.from} to={route.to} /> */}