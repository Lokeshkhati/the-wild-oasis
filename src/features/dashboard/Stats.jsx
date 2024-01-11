import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
    console.log(confirmedStays, numDays, cabinCount, 'hola')
    // 1.
    const numBookings = bookings?.length;

    // 2.
    const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

    // 3.
    const checkins = confirmedStays?.length;

    // 4.
    const occupation =
        confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
        (numDays);
    return (
        <>
            <Stat
                title="Bookings"
                color="blue"
                icon={<HiOutlineBriefcase />}
                value={numBookings}
            />
            <Stat
                title="Sales"
                color="green"
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title="Check ins"
                color="indigo"
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat
                title="Occupancy rate"
                color="yellow"
                icon={<HiOutlineChartBar />}
                value={Math.round(2 * 10) + "%"}

            />
        </>
    );
}

export default Stats;