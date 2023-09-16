import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from '../../ui/Spinner'
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
    const { bookings, isLoading } = useRecentBookings()
    const { stays, isLoading: isLoading1, confirmedStays, numDays } = useRecentStays()

    const { cabins, isLoading: isLoading3 } = useCabins()

    if (isLoading || isLoading1 || isLoading3) return <Spinner />
    return (
        <StyledDashboardLayout>
            <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinsCount={cabins?.length} />
            <div>
                Today's activity
            </div>
            <div>
                Chart Stay duration
            </div>
            <SalesChart bookings={bookings} numDays={numDays} />
        </StyledDashboardLayout>
    )
}
export default DashboardLayout