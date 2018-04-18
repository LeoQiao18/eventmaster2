import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eventsReducer from "./eventsReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
    auth: authReducer,
    events: eventsReducer,
    event: eventReducer
});
