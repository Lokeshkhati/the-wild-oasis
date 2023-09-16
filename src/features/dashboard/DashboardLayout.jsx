import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from '../../ui/Spinner'
import useRecentStays from "./useRecentStays";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
    const { bookings, isLoading } = useRecentBookings()
    const { stays, isLoading: isLoading1, confirmedStays } = useRecentStays()

    if (isLoading || isLoading1) return <Spinner />
    return (
        <StyledDashboardLayout>
            <div>
                statistics
            </div>
            <div>
                Today's activity
            </div>
            <div>
                Chart Stay duration
            </div>
            <div>
                Chart Sales
            </div>
        </StyledDashboardLayout>
    )
}
export default DashboardLayout