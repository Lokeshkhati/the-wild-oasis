import supabase, { supabaseUrl } from "./supabase"

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

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', "")

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    // create Cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
    if (error) {
        throw new Error('Cabin could not be created')
    }
    // upload image
    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)

    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data.id)
        throw new Error("Cabin image could not be uploaded and the cabin was not created")
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