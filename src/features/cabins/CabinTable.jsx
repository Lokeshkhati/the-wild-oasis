import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

const CabinTable = () => {
    const { isLoading, data: cabins, error } = useQuery({
        queryKey: ['cabin'],
        queryFn: getCabins
    })

    return (
        <div>CabinTable</div>
    )
}
export default CabinTable

