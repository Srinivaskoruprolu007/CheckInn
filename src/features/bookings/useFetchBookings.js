import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/constants";

const useFetchBookings = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //   Filter
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  const sortByValue = searchParams.get("sort") || "startDate-desc";
  const [field, direction] = sortByValue?.split("-");
  const asc = direction === "asc";

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const sort = { field, value: asc };
  const {
    data: { data: bookings, count } = {},
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sortBy: sort, page }),
  });

  const pageCount = Math.ceil(count / PAGE_COUNT);
  // Pre-fetching
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getBookings({ filter, sortBy: sort, page: page + 1 }),
    });
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getBookings({ filter, sortBy: sort, page: page - 1 }),
    });
  }
  return { bookings, error, isLoading, count };
};
export default useFetchBookings;
