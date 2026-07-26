"use client";

import { useState } from "react";
import type { BookingFormData } from "@/types/booking";

const initialState: BookingFormData = {
  pickup: "",
  destination: "",
  tripType: "oneway",

  pickupDate: "",
  pickupTime: "",

  returnDate: "",

  passengers: 1,

  customerName: "",
  mobile: "",
  email: "",

  notes: "",
};

export default function useBooking() {
  const [booking, setBooking] =
    useState<BookingFormData>(initialState);

  function updateField<
    K extends keyof BookingFormData
  >(field: K, value: BookingFormData[K]) {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function resetBooking() {
    setBooking(initialState);
  }

  return {
    booking,
    updateField,
    resetBooking,
  };
}