import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
    auth: authReducer,
    eventsList: eventsReducer
});
