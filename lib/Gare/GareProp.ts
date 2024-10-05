import { RouteForGare } from "../Routes";

export interface GareProp {
    Routes: RouteForGare[];
    CategoryTitle: string;
  }

export interface Gare {
    title: string;
    routes: RouteForGare[];
  }