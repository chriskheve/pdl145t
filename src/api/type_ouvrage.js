import axios from "../axios";


export const getEntite = async () => {
    const response = await axios.get('/api/entite')

    console.log(response)
    return response
}