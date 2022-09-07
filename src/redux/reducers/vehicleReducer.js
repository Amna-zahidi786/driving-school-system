
const initialState = {vehicle:{}}

export const vehicleReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CREATE_VEHICLE':
           return{
            vehicle:null,
            message: action.payload
           };
           default:
            return state
        
    }
}
