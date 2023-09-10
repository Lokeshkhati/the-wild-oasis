import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBooking"
import { useSearchParams } from "react-router-dom"

export function useBookings() {
    const queryClient = useQueryClient()
    const [searchParams] = useSearchParams()

    // FILTER
    const filterValue = searchParams.get('status')

    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue }

    // SORT
    const sort = searchParams.get('sortBy') || "startDate-asc"
    const [field, direction] = sort.split('-')
    const sortBy = { field, direction }

    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

    const { isLoading,
        data: { data: bookings, count } = {}, error } = useQuery({
            queryKey: ['bookings', filter, sortBy, page],
            queryFn: () => getBookings({ filter, sortBy, page })
        })

    // PREFETCHING
    const pageCount = Math.ceil(count / PAGE_SIZE)

    if (page < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page + 1],
            queryFn: () => getBookings({ filter, sortBy, page: page + 1 })
        })
    }
    if (page > 1) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page - 1],
            queryFn: () => getBookings({ filter, sortBy, page: page - 1 })
        })
    }

    return { isLoading, bookings, error, count }
}