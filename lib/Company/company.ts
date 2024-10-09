import { CarType } from "../Car/carType";

export interface Company {
    name: string;
    NumberOfRoutes: number;
    logo: string;
    typeOfDiscountItOffers: string;
    companyId: string;
    rating: number;
    WhereItOperates: string;
    TypeOcarsItOwns: CarType[];
    description: string;
}
