import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings"
import { useNavigate } from "react-router-dom"
import {toast} from "react-hot-toast"

const useDeleteBooking = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutate: deleteBooking, isPending:isDeleting}=useMutation({
        mutationKey:["deleteBooking"],
        mutationFn: (id) => deleteBookingApi(id),
        onSuccess: () => {
            toast.success("Booking deleted")
            queryClient.invalidateQueries({active: true})
            navigate("/")
        },
    })
    return {deleteBooking, isDeleting}
}
export default useDeleteBooking