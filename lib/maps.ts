export interface Coordinates {
  lat: number;
  lng: number;
}

export async function geocodeAddress(
  address: string
): Promise<Coordinates | null> {
  console.log("Geocode:", address);

  return null;
}

export async function calculateDistance(
  pickup: string,
  destination: string
) {
  console.log(
    "Distance:",
    pickup,
    destination
  );

  return {
    distance: 0,
    duration: 0,
  };
}