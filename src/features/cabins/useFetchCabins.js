import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../../utils/constants";

const useFetchCabins = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filteredValue = searchParams.get("discount");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : {
          field: "discount",
          value: filteredValue,
        };
  // const sortBy =
  const sortByValue = searchParams.get("sort") || "name-asc";
  const [sortField, direction] = sortByValue.split("-");
  const asc = direction === "asc";
  const sortBy = { field: sortField, value: asc };
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    data: { data: cabins, count } = {},
    error,
    isPending,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy, page],
    queryFn: () => getCabins({ filter, sortBy, page }),
  });

  // Pre-fetching
  const pageCount = Math.ceil(count / PAGE_COUNT);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page + 1],
      queryFn: () => getCabins({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["cabins", filter, sortBy, page - 1],
      queryFn: () => getCabins({ filter, sortBy, page: page - 1 }),
    });
  }
  return { cabins, error, isPending, count };
};
export default useFetchCabins;
