import supabase from "./supabase";

export const getBookings = async () => {
    let { data, error } = await supabase
        .from('bookings')
        .select(
            "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
            { count: "exact" }
        );

    if (error) {
        console.log(error)
        throw new Error('Bookings could not be loaded')
    }

    return data
}
