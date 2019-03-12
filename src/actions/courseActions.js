import * as ActionTypes from './courseActionTypes';

export function createCourse(course) {
    return {type: ActionTypes.CREATE_COURSE, course};
}