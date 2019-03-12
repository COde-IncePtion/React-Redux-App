import * as ActionTypes from '../actions/courseActionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];

        default:
            return state;
    }
}