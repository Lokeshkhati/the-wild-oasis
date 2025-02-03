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


const createEditCabin = async (newCabin, id) => {
    const hasImagePath = newCabin.image?.startsWith?.(import.meta.env.VITE_SUPABASE_URL)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', "")

    const imagePath = hasImagePath ? newCabin.image : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`

    // create/edit Cabin
    let query = supabase.from('cabins')

    // CREATE
    if (!id) {
        query = query.insert([{ ...newCabin, image: imagePath }])
    }

    // EDIT
    if (id) {
        query = query.update({ ...newCabin, image: imagePath }).eq("id", id)
    }

    const { data, error } = await query.select().single()
    if (error) {
        throw new Error('Cabin could not be created')
    }
    // upload image
    if (hasImagePath) return data
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

export { getCabins, createEditCabin, deleteCabin }