import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBooking"

const useTodayActivity = () => {
    const { isLoading, data: activities } = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ['today-activity']
    })
    return { activities, isLoading }
}

export default useTodayActivity