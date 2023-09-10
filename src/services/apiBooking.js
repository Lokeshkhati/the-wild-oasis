import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export const getBookings = async ({ filter, sortBy, page }) => {

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

    if (page) {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        query = query.range(from, to);
    }

    let { data, error, count } = await query
    if (error) {
        console.log(error)
        throw new Error('Bookings could not be loaded')
    }

    return { data, count }
}

export const getBooking = async (id) => {
    const { data, error } = await supabase
        .from("bookings")
        .select("*, cabins(*), guests(*)")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Booking not found");
    }

    return data;
}