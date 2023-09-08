import Row from "../ui/Row"
import Heading from "../ui/Heading"
import CabinTable from "../features/cabins/CabinTable"
import { useState } from 'react'
import AddCabin from "../features/cabins/AddCabin"
import CabinTableOperations from "../features/cabins/CabinTableOperations"
const Cabins = () => {
    const [show, setShow] = useState(false)

    return (
        <><Row type='horizontal'>
            <Heading as='h1'>All Cabins</Heading>
            <CabinTableOperations />
        </Row>
            <Row>
                <CabinTable />
                <AddCabin />
            </Row>
        </>

    )
}
export default Cabins
