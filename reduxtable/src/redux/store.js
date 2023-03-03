//5th make this:-
import { rootReducer } from "./rootReducer";
import { createStore } from 'redux'


// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer)

export {store}
