import axios from "axios"

export const addNewVehicle = (vehicle) => async (dispatch) => {
    const response = await axios.post(`http://localhost:7000/new-vehicle`, vehicle)
    dispatch({
        type: "CREATE_VEHICLE",
        payload:response.data
    })
   
}