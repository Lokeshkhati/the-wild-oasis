import supabase from "./supabase"

const getCabins = async () => {
    let { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }

    return data
}


export { getCabins }