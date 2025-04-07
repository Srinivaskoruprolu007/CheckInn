import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

const useRecentStays = () => {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { isPending, data: bookings } = useQuery({
    queryKey: ["stays", `last - ${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });
  const confirmedStays = bookings?.filter(
    (booking) =>
      booking.status === "checked-in" || booking.status === "checked-out"
  );
  return { isPending, confirmedStays };
};
export default useRecentStays;
