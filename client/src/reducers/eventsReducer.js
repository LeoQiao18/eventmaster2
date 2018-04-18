import { FETCH_EVENTS, DELETE_EVENTS } from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.payload;
        case DELETE_EVENTS:
            return state.filter(e => !isInArray(e._id, action.payload));
        default:
            return state;
    }
}

function isInArray(x, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }

    return false;
}
