import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

const useFetchCabins = () => {
  const {
    data: cabins,
    error,
    isPending,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { cabins, error, isPending };
};
export default useFetchCabins;
