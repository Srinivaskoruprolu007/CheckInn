import { useMutation } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const useCheckout = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutate: checkout, isPending: isCheckout}=useMutation({
        mutationKey: ["checkout"],
        mutationFn: (id) =>
            updateBooking(id, {
                status: "checked-out",
            }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({active: true})
            toast.success(`Booking ${data.id} checked out`)
            navigate("/")
        },
    })
    return {checkout, isCheckout}
}
export default useCheckout;