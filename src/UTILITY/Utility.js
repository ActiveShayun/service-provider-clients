import axios from "axios"

export const imgBbUpload = async (image) => {

    const formData = new FormData()
    formData.append('image', image)

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)

    console.log('imgBbUpload', data);
}