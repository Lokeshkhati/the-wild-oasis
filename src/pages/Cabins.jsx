import Row from "../ui/Row"
import Heading from "../ui/Heading"
import CabinTable from "../features/cabins/CabinTable"
import { useState } from 'react'
import AddCabin from "../features/cabins/AddCabin"
const Cabins = () => {
    const [show, setShow] = useState(false)

    return (
        <><Row type='horizontal'>
            <Heading as='h1'>All Cabins</Heading>
            <p>Filter/Sort</p>
        </Row>
            <Row>
                <CabinTable />
                <AddCabin />
            </Row>
        </>

    )
}
export default Cabins
