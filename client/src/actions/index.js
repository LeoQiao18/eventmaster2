import axios from "axios";

import { FETCH_USER, FETCH_EVENTS, ADD_EVENTS } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEventsList = () => async dispatch => {
    const res = await axios.get("/api/events");
    console.log(res);
    dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const postEvents = (events, cb) => async dispatch => {
    const res = await axios.post("/api/events", events);
    dispatch({ type: ADD_EVENTS, payload: res.data });

    cb();
};
