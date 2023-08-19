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


const createCabin = async (newCabin) => {

    console.log(newCabin, 'api')
    const { data, error } = await supabase
        .from('cabins')
        .insert([newCabin])
    console.log(data, 'data')
    if (error) {
        throw new Error('Cabin could not be created')
    }

    return data

}

const deleteCabin = async (id) => {
    console.log(id, 'id')
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    console.log(data, 'delete data')
    if (error) {
        throw new Error('Cabin could not be deleted')
    }

    return data

}

export { getCabins, createCabin, deleteCabin }