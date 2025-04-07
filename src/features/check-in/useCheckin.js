import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckin } = useMutation({
    mutationKey: ["updateBooking"],
    mutationFn: ({id, breakfast}) =>
      updateBooking(id, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      // Invalidate the query to refetch the booking data after update
      queryClient.invalidateQueries({
        active: true,
      });
      toast.success(`Booking ${data.id} checked in`);
      navigate("/");
    },
  });
  return { checkin, isCheckin };
};
export default useCheckin;
