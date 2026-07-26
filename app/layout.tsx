import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sharayu Tours & Travels | Premium Cab Service",
  description:
    "Book safe and comfortable cab services in Pune. Airport Transfers, Outstation Trips, Corporate Travel and Tour Packages.",
  keywords: [
    "Pune Taxi",
    "Cab Booking",
    "Airport Pickup",
    "Outstation Taxi",
    "Sharayu Tours",
    "Pune Travels",
  ],
  authors: [{ name: "Sharayu Tours & Travels" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${outfit.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}