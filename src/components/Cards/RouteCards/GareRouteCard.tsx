import { Link } from "react-router-dom";
import { RouteForGare } from "../../../../types";

export const RouteForGareCard = (routes: RouteForGare) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-start">
        <Link to={`/single-route/${routes.id}`}>
          <h2 className="text-l">
            {routes.from} - {routes.to}
          </h2>
          <p className="text-xs text-gray-500">
            {routes.to} - {routes.from}
          </p>
        </Link>
      </div>
    </div>
  );
};
