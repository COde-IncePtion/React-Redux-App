import * as ActionTypes from './courseActionTypes';
import * as courseApi from '../api/courseApi';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}


function loadCoursesSuccess(courses) {
    return {type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function (dispatch) {  // this dispatch comes from thunk
        return courseApi.getCourses().then(res => dispatch(loadCoursesSuccess(res)))
                                     .catch(err=> console.log(err));
    }
}