import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getStaysAfterDate } from "../../services/apiBooking"

const useRecentStays = () => {
    const [searchParams] = useSearchParams()
    const numDays = !searchParams('last') ? 7 : Number(searchParams('last'))
    const queryDate = subDays(new Date(), numDays).toISOString

    const { data: stays, isLoading } = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `last-${numDays}`]
    })

    const confirmedStays = stays.filter(() => stays.status === 'checked-in' || stays.status === 'checked-out')
    return { stays, isLoading, confirmedStays }
}

export default useRecentStays