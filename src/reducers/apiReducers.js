import {START_API_CALL} from "../actions/apiActionTypes";

export default function apiReducers(state = 0, action) {
    debugger;
    if (action.type === START_API_CALL)
        return state + 1;

    if (action.type.search("_SUCCESS")!== -1)
        return state - 1;

    return state;
}