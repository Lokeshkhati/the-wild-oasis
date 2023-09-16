import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getBookingsAfterDate } from "../../services/apiBooking"

const useRecentBookings = () => {
    const [searchParams] = useSearchParams()
    const numDays = !searchParams('last') ? 7 : Number(searchParams('last'))
    const queryDate = subDays(new Date(), numDays).toISOString

    const { data: bookings, isLoading } = useQuery({
        queryFn: () => getBookingsAfterDate(queryDate),
        queryKey: ['bookings', `last-${numDays}`]
    })
    return { bookings, isLoading }
}

export default useRecentBookings