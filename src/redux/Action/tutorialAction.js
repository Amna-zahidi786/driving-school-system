import axios from "axios"

export const addNewTutorial = (tutorial) => async (dispatch) => {
    const response = await axios.post(`http://localhost:7000/new-tutorial`, tutorial)
    dispatch({
        type: "CREATE_TUTORIAL",
        payload:response.data
    })
    if(response.statusText === 'OK'){
        alert('Data has been created')
      }
}