import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBooking"
import { useSearchParams } from "react-router-dom"

export function useBookings() {
    const [searchParams] = useSearchParams()

    // FILTER
    const filterValue = searchParams.get('status')

    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue }

    // SORT
    const sort = searchParams.get('sortBy') || "startDate-asc"
    const [field, direction] = sort.split('-')
    const sortBy = { field, direction }


    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ['bookings', filter, sortBy],
        queryFn: () => getBookings({ filter, sortBy })
    })

    return { isLoading, bookings, error }

}