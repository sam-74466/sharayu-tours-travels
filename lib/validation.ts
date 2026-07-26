import { z } from "zod";

export const BookingSchema = z.object({
  pickup: z
    .string()
    .min(3, "Pickup is required"),

  destination: z
    .string()
    .min(3, "Destination is required"),

  customerName: z
    .string()
    .min(2, "Name is required"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid mobile number"),

  email: z
    .string()
    .email("Invalid email"),

  passengers: z
    .number()
    .min(1)
    .max(7),
});

export type BookingInput =
  z.infer<typeof BookingSchema>;