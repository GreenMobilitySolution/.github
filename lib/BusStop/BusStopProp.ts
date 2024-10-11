// File: src/lib/BusStopProp.ts

import { BusStop } from "./BusStop";

export interface BusStopProp {
  CategoryTitle: string;
  busStops: BusStop[];
  price: number;
}

export interface BusStopCardProps {
    busStop: BusStop;
    route: {
      from: string;
      to: string;
    };
  }