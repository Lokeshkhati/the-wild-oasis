import supabase from "./supabase";

export const getBookings = async ({ filter, sortBy }) => {

    let query = supabase
        .from('bookings')
        .select(
            "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
            { count: "exact" }
        );

    // FILTER
    if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

    // SORT
    if (sortBy)
        query = query.order(sortBy.field, {
            ascending: sortBy.direction === "asc",
        });


    let { data, error } = await query
    if (error) {
        console.log(error)
        throw new Error('Bookings could not be loaded')
    }

    return data
}
