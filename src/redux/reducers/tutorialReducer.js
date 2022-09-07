
const initialState = {tutorial:{}}

export const tutorialReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CREATE_TUTORIAL':
           return{
            tutorial:null,
            message: action.payload
           };
           default:
            return state
        
    }
}