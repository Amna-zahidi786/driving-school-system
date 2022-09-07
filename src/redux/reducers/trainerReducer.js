const initialState = {trainer:{}}

export const trainerReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CREATE_TRAINER':
           return{
            trainer:null,
            message: action.payload
           };
           default:
            return state
        
    }
}