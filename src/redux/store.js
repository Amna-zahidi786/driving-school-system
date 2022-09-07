import { createStore, combineReducers,applyMiddleware} from "redux";

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { authReducer} from '../redux/reducers/authReducer'
import { vehicleReducer} from '../redux/reducers/vehicleReducer'
import { tutorialReducer} from '../redux/reducers/tutorialReducer'
import { trainerReducer} from '../redux/reducers/trainerReducer'



const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const rootReducer = combineReducers({   
   vehicle:vehicleReducer,
   tutorial:tutorialReducer,
   trainer:trainerReducer,
   auth:authReducer,
})

export const store = createStore(rootReducer, composeEnhancer);