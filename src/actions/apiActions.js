import * as ApiActionTypes from "./apiActionTypes";

export function startApiCall() {
    return {type: ApiActionTypes.START_API_CALL};
}