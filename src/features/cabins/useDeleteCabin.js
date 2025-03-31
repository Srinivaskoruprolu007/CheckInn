import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletecabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export const useDeletecabin = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });
  return { isDeleting, deleteCabin };
};
