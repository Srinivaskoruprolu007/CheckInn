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
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    data :{data: bookings, count} = {},
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sortBy: sort , page}),
  });


  return { error, isLoading, bookings, count };
};
export default useFetchBookings;
