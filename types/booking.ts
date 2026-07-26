export type TripType = "local" | "oneway" | "roundtrip";

export interface BookingFormData {
  pickup: string;
  destination: string;
  tripType: TripType;

  pickupDate: string;
  pickupTime: string;
  returnDate?: string;

  passengers: number;

  customerName: string;
  mobile: string;
  email: string;

  notes?: string;
}

export interface FareResult {
  distanceKm: number;
  durationMin: number;

  baseFare: number;
  distanceFare: number;

  toll: number;
  parking: number;

  waiting: number;

  subtotal: number;
  nightCharge: number;

  total: number;
  advance: number;
}