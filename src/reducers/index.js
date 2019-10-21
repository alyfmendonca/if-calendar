import { combineReducers } from "redux";
import eventTypeReducer from "./eventTypeReducer";

const reducers = combineReducers({
    addEvent: eventTypeReducer
});

export default reducers;