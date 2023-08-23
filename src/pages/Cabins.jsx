import Row from "../ui/Row"
import Heading from "../ui/Heading"
import CabinTable from "../features/cabins/CabinTable"
import Button from "../ui/Button"
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import { useState } from 'react'
const Cabins = () => {
    const [show, setShow] = useState(false)

    return (
        <><Row type='horizontal'>
            <Heading as='h1'>All Cabins</Heading>
            <p>Filter/Sort</p>
        </Row>
            <Row>
                <CabinTable />
                <Button onClick={() => setShow(!show)}>
                    Add New Cabin
                </Button>
                {show && <CreateCabinForm />}
            </Row>
        </>

    )
}
export default Cabins
