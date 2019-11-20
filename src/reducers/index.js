import { combineReducers } from "redux";
import eventTypeReducer from "./eventTypeReducer";
import eventInscricaoReducer from "./eventInscricaoReducer";

const reducers = combineReducers({
    addEvent: eventTypeReducer,
    agendar: eventInscricaoReducer

});

export default reducers;