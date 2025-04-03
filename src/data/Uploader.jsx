import supabase from "../services/supabase";
import { guests } from "./data-guests";
import { cabins } from "./data-cabins";
import { bookings } from "./data-bookings";
import { subtractDates } from "../utils/helpers";
import { isFuture, isPast, isToday } from "date-fns";
import { useState } from "react";
import Button from "../ui/Button";

// functions
export const deleteGuests = async () => {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) {
    console.error(error);
    throw new Error("Guests could not be deleted");
  }
};

export const deleteCabins = async () => {
  const { error } = await supabase.from("cabins").delete().gt("id", 0);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
};

export const deleteBookings = async () => {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) {
    console.error(error);
    throw new Error("Bookings could not be deleted");
  }
};

export const createGuests = async () => {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) {
    console.error(error);
    throw new Error("Guests could not be created");
  }
};

export const createCabins = async () => {
  const { error } = await supabase.from("cabins").insert(cabins);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
};

export const createBookings = async () => {
  const { data: guestIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestIds.map((guest) => guest.id);

  const { data: cabinIds } = await supabase
    .from("cabins")
    .select("id")
    .order("id");

  const allCabinIds = cabinIds.map((cabin) => cabin.id);

  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinId - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extraPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0;
    const totalPrice = cabinPrice + extraPrice;

    let status;

    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "checked-in";
    return {
      ...booking,
      numNights,
      cabinPrice,
      extraPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      cabinId: allCabinIds.at(booking.cabinId - 1),
      status,
    };
  });
  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) {
    console.log(error.message);
  }
};
const Uploader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadAll = async () => {
    setIsLoading(true);
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  };

  const uploadBookings = async () => {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();

    setIsLoading(false);
  };
  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>Sample Data</h3>
      <Button onClick={uploadAll} disabled={isLoading}>
        Upload All
      </Button>
      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload Booking only
      </Button>
    </div>
  );
};

export default Uploader;
