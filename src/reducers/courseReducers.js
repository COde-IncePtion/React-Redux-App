import * as ActionTypes from '../actions/courseActionTypes';
import {loop, Cmd} from "redux-loop";
import {getCourses, saveCourse} from "../api/courseApi";
import {loadCoursesSuccess} from "../actions/courseActions";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return loop(
                [...state, {...action.course}],
                Cmd.run(saveCourse, {
                    args: [action.course]
                })
            );
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;

        case ActionTypes.FETCH_COURSES:
            return loop(
                [...state],
                Cmd.run(getCourses,
                    {
                        successActionCreator: loadCoursesSuccess,
                    })
            );

        default:
            return state;
    }
}