import * as ActionTypes from './courseActionTypes';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}

export function fetchCourses() {
    return {type: ActionTypes.FETCH_COURSES};
}

export function loadCoursesSuccess(courses) {
    return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}
