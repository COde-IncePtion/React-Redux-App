import * as ActionTypes from './courseActionTypes';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}

export function createCourseSuccess(course) {
    debugger;
    return {type: ActionTypes.CREATE_COURSE_SUCCESS, course};
}

export function fetchCourses() {
    return {type: ActionTypes.FETCH_COURSES};
}

export function loadCoursesSuccess(courses) {
    return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function deleteCourse(courseId) {
    return {type: ActionTypes.DELETE_COURSE, courseId};
}


export function courseDeletedSuccess(courseId) {
    debugger;
    return {type: ActionTypes.COURSE_DELETED_SUCCESS, 'courseId': 4};
}
