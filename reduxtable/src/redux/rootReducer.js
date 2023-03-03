//4th make this:-(rootReducer).to combine multiple reducer into rootReducer we import combineReducers first from redux.
import { populateReducer, POPULATE_KEY } from "./populateRedux/populate.reducer";
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    POPULATE : populateReducer                 //this keyword(POPULATE) is access with useSelector
});

export{rootReducer}