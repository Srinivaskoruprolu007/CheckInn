import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

const useFetchCabins = () => {
  const [searchParams] = useSearchParams();
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
    queryFn: () => getCabins({ filter, sortBy , page }),
  });
  return { cabins, error, isPending, count };
};
export default useFetchCabins;
