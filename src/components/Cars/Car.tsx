import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import LoadButton from "../Buttons/LoadButton";
import CarCard from "../Cards/CarCard/CarCard";
import { CarCardProps } from "../../types/Car/CarProp";

interface CarProp {
  cars: CarCardProps[];
}

export function CarList({ cars }: CarProp) {
  const [carList, setCarList] = useState<CarCardProps[]>([]);
  const [viewCars, setViewCars] = useState<CarCardProps[]>([]);
  const [viewItems, setViewItems] = useState(3);
  const [loading, setLoading] = useState(true);

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  useEffect(() => {
    // Simulate fetching cars
    setTimeout(() => {
      setCarList(cars);
      setLoading(false);
    }, 1000);
  }, [cars]);

  useEffect(() => {
    const carsToDisplay = carList.slice(0, viewItems);
    setViewCars(carsToDisplay);
  }, [viewItems, carList]);

  return (
    <>
      <div className="w-[85%] border rounded-lg bg-gray-100 ">
        <div className="py-8 xmd:px-8 lg:px-10 w-full">
          <p className=" text-gray-500 text-left text-lg">Imodoka:</p>
        </div>
        <div
          className="flex flex-col items-center justify-around gap-y-8 py-8 xmd:px-8 lg:px-16"
          id="cars"
        >
          {loading && (
            <div
              className="w-full flex justify-center px-6 py-20"
              data-testid="loading-spinner"
            >
              <PropagateLoader color="#070f2b" />
            </div>
          )}

          {!loading && (
            <div className="w-full flex gap-y-10 justify-center flex-wrap xmd:px-0">
              {viewCars.length > 0
                ? viewCars.map((car, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2">
                      <CarCard
                        name={car.name}
                        model={car.model}
                        imageUrl={car.imageUrl}
                        description={car.description}
                        owner={car.owner}
                        rating={car.rating}
                      />
                    </div>
                  ))
                : `No cars available at the moment. Please check back later.`}
            </div>
          )}
        </div>
        {!loading && carList.length > viewItems && (
          <div className="w-full flex items-center justify-center p-12">
            <LoadButton handle={handleAddMore}>Izindi Modoka</LoadButton>
          </div>
        )}
      </div>
    </>
  );
}
