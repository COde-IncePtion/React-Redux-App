import * as ActionTypes from '../actions/courseActionTypes';
import {loop, Cmd} from "redux-loop";
import {getCourses, saveCourse, deleteCourse} from "../api/courseApi";
import {courseDeletedSuccess, createCourseSuccess, loadCoursesSuccess} from "../actions/courseActions";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return loop(
                [...state],
                Cmd.run(saveCourse, {
                    args: [action.course],
                    successActionCreator: createCourseSuccess
                })
            );

        case ActionTypes.CREATE_COURSE_SUCCESS:
            return [...state, action.course];

        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;

        case ActionTypes.FETCH_COURSES:
            return loop(
                [...state],
                Cmd.run(getCourses,
                    {
                        successActionCreator: loadCoursesSuccess
                    })
            );

        case ActionTypes.DELETE_COURSE:
            return loop(
                [...state],
                Cmd.run(deleteCourse,
                    {
                        args: [action.courseId],
                        successActionCreator: courseDeletedSuccess
                    })
            );

        case ActionTypes.COURSE_DELETED_SUCCESS:
            debugger;
            return [...(state.filter(course => course.id != action.courseId))];

        default:
            return state;
    }
}