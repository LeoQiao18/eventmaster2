import axios from "axios";

import { FETCH_USER, FETCH_EVENTS_LIST } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEventsList = () => async dispatch => {
  const res = await axios.get("/api/events/simple");
  console.log(res);
  dispatch({ type: FETCH_EVENTS_LIST, payload: res.data });
};
