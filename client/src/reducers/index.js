import { combineReducers } from "redux";
import authReducer from "./authReducer";
import eventsListReducer from "./eventsListReducer";

export default combineReducers({
  auth: authReducer,
  eventsList: eventsListReducer
});
