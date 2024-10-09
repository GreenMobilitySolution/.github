import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Gare, GareProp, RouteForGare } from "../../../lib";
import { GareForCategoryCard } from "../Cards/GareCards/GareForCategoryCard";
import LoadButton from "../Buttons/LoadButton";

export function SingleCategory(props: GareProp) {
  const [gareList, setGareList] = useState<Gare[]>([]);
  const [viewGares, setViewGares] = useState<Gare[]>([]);
  const [viewItems, setViewItems] = useState(4);
  const [loading, setLoading] = useState(true);

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  useEffect(() => {
    setTimeout(() => {
      const classifiedGares: { [key: string]: RouteForGare[] } = {};

      props.Routes.forEach((route) => {
        const gareTitle = route.from;
        if (!classifiedGares[gareTitle]) {
          classifiedGares[gareTitle] = [];
        }
        classifiedGares[gareTitle].push(route);
      });

      const gareArray: Gare[] = Object.keys(classifiedGares).map((title) => ({
        title,
        routes: classifiedGares[title],
      }));

      setGareList(gareArray);
      setLoading(false);
    }, 1000);
  }, [props.Routes]);

  useEffect(() => {
    const gareToDisplay = gareList.slice(0, viewItems);
    setViewGares(gareToDisplay);
  }, [viewItems, gareList]);

  return (
    <>
      <div id="gares">
        <div className="flex flex-col items-center justify-around gap-y-8 py-8 mt-5 xmd:px-8 lg:px-16" id="routes">
          <h1 className="text-2xl font-medium">{props.CategoryTitle}</h1>
          <div className="gare w-full">
            <p className="text-gray-500 text-left mx-10 text-lg">Gare:</p>
          </div>

          {loading && (
            <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
              <PropagateLoader color="#070f2b" />
            </div>
          )}

          {!loading && (
            <div className="w-full flex gap-y-10 justify-center flex-wrap gap-x-5 px-6 xmd:px-0">
              {viewGares.length > 0 ? (
                viewGares.map((gare, index) => (
                  <GareForCategoryCard Routes={gare.routes} GareTitle={gare.title} key={index} />
                ))
              ) : (
                `No routes available at the moment. Please check back later.`
              )}
            </div>
          )}
        </div>
        {!loading && gareList.length > viewItems && (
          <div className="w-full flex items-center justify-center p-12">
            <LoadButton handle={ handleAddMore }>Izindi Gare</LoadButton>
          </div>
        )}
      </div>
    </>
  );
}