import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBooking";

export function useCheckout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
        mutationFn: ({ bookingId }) =>
            updateBooking(bookingId, {
                status: "checked-out",
                isPaid: true,
            }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked out`);
            queryClient.invalidateQueries({ active: true });
            navigate("/");
        },

        onError: () => toast.error("There was an error while checking out"),
    });

    return { checkout, isCheckingOut };
}