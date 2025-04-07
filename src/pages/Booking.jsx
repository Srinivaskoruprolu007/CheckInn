import BookingDetail from "../features/bookings/BookingDetail";
import { useParams } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <h1>Booking</h1>
      <p>This is the booking page.</p>
      <BookingDetail />
    </div>
  );
};

export default Booking;
