import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking as deleteBookingApi } from "../../services/apiBooking"

export function useDeleteBooking() {
    const queryClient = useQueryClient()
    const { mutate: deleteBooking, isLoading: isDeleting, } = useMutation({
        mutationFn: deleteBookingApi,

        onSuccess: () => {
            toast.success('Booking Successfully deleted')
            queryClient.invalidateQueries({
                queryKey: ['bookings']
            })
        },
        onError: (error) => toast.error(error.message)
    })

    return { isDeleting, deleteBooking }
} 