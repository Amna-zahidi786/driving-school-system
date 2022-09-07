import axios from "axios"

export const addNewUser = (user) => async (dispatch) => {
    const response = await axios.post(`http://localhost:7000/register`, user)
    dispatch({
        type: "CREATE_USER",
        payload:response.data
    })
   
}