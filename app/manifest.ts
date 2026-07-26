import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sharayu Tours & Travels",
    short_name: "Sharayu Tours",
    description: "Reliable Cab Booking Service",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#facc15",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}