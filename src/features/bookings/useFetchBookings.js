import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

const useFetchBookings = () => {
  const {
    data: bookings,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings, error, isLoading };
};
export default useFetchBookings;