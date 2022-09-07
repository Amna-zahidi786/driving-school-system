import axios from "axios"

export const addNewTrainer = (trainer) => async (dispatch) => {
    const response = await axios.post(`http://localhost:7000/new-trainer`, trainer)
    dispatch({
        type: "CREATE_TRAINER",
        payload:response.data
    })
    if(response.statusText === 'OK'){
        alert('Data has been created')
      }
}