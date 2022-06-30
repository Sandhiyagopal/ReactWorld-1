import { combineReducers } from 'redux';
import { messageReducer } from "./message.reducer";

let rootReducer=combineReducers({
    message:messageReducer
})
export {rootReducer}