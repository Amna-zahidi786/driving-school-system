
const initialState = {user:{}}

export const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CREATE_USER':
           return{
            user:null,
            message: action.payload
           };
           default:
            return state
        
    }
}
