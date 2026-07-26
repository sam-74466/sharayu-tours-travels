export interface Route {
  id: number;
  from: string;
  to: string;
  distance: number;
  estimatedTime: string;
  startingFare: number;
}