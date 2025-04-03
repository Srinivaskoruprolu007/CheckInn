import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

const useFetchBookings = () => {
  const [searchParams] = useSearchParams();

  //   Filter
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  const sortByValue = searchParams.get("sort") || "startDate-desc";
  const [field, direction] = sortByValue?.split("-");
  const asc = direction === "asc";

  const sort = { field, value: asc };
  const {
    data: bookings,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["bookings", filter, sort],
    queryFn: () => getBookings({ filter, sortBy: sort }),
  });

  return { bookings, error, isLoading };
};
export default useFetchBookings;
