import axios from '../axios'

export const signup = async (data) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }


    const res = {
        data : {

            token: "azerty",
            user: {
                id: 1,
                prenom: "Chris",
                nom: "Kheve"
            }
        }
    }
    // const response = await axios.post('/api/user/login', data, config) 
    
    return res
};