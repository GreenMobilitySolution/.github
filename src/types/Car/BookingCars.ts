export interface Package {
    size: string;
    weight: number;
    count: number;
  }
  
  export interface Car {
    id: string;
    type: "company" | "individual";
    name: string;
    logo: string;
    rating?: number;
    availableTimeSlots: { time: string; seats: number }[];
  }
