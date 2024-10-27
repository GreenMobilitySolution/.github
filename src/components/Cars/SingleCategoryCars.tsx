import { useEffect, useState } from "react";
import { Gare, GareProp, RouteForGare } from "../../../types";
import { CompanyForCategory } from "../Company/CompanyForCategory";
import { SampleCompany } from "../../../Database/Company/company";
import { CarList } from "./Car";
import { SampleCars } from "../../../Database/Car/car";

export function SingleCategoryCars(props: GareProp) {
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
      <div id="cars">
        <div
          className="flex flex-col items-center justify-around gap-y-8 py-8 mt-5 xmd:px-8 lg:px-16"
          id="routes"
        >
          <h1 className="text-2xl font-medium">
            {props.CategoryTitle === "Ingendo zo Mumugi wa Kigali" ||
            props.CategoryTitle === "Routes in Kigali"
              ? "Kompanyi n'amamodoka akorera Mumugi wa Kigali"
              : props.CategoryTitle === "Ingendo zo Muntara" ||
                  props.CategoryTitle === "Upcountry Routes"
                ? "Kompanyi n'amamodoka akorera Muntara"
                : "Kompanyi n'amamodoka watega"}
          </h1>
          <div className="gare w-full">
            <p className="text-gray-500 text-left mx-10 text-lg">
              Kompanyi/Imodoka:
            </p>
          </div>

          <CompanyForCategory companies={SampleCompany} />
          <CarList cars={SampleCars} />
        </div>
      </div>
    </>
  );
}
