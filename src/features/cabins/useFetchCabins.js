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
  const {
    data: cabins,
    error,
    isPending,
  } = useQuery({
    queryKey: ["cabins", filter, sortBy],
    queryFn: () => getCabins({ filter, sortBy }),
  });
  return { cabins, error, isPending };
};
export default useFetchCabins;
