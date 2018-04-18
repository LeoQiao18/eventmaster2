import axios from "axios";

import {
    FETCH_USER,
    FETCH_EVENTS,
    FETCH_EVENT,
    ADD_EVENTS,
    DELETE_EVENTS
} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEvents = cb => async dispatch => {
    const res = await axios.get("/api/events");
    dispatch({ type: FETCH_EVENTS, payload: res.data });
    if (cb) {
        cb();
    }
};

export const fetchEvent = (eventId, cb) => async dispatch => {
    const res = await axios.get(`/api/events/${eventId}`);
    dispatch({ type: FETCH_EVENT, payload: res.data });
    if (cb) {
        cb();
    }
};

export const postEvents = (events, cb) => async dispatch => {
    const res = await axios.post("/api/events", events);
    dispatch({ type: ADD_EVENTS, payload: res.data });
    if (cb) {
        cb();
    }
};

export const deleteEvents = (eventIds, cb) => async dispatch => {
    const res = await axios.delete("/api/events", { data: eventIds });
    dispatch({ type: DELETE_EVENTS, payload: res.data });
    if (cb) {
        cb();
    }
};
