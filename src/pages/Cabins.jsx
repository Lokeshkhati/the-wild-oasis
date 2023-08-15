import Row from "../ui/Row"
import Heading from "../ui/Heading"
import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

const Cabins = () => {
    useEffect(() => {
        // getCabins().then((data) => console.log(data))
    }, [])
    return (
        <Row type='horizontal'>
            <Heading as='h1'>All Cabins</Heading>
            <img src="https://wcavmwnnwpmjdqyirzsl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-08-14T12%3A41%3A23.358Z" alt="" />
        </Row>
    )
}
export default Cabins
