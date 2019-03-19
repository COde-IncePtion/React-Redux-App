import * as ActionTypes from './authorActionTypes';

export function fetchAuthors() {
    return {type: ActionTypes.FETCH_AUTHORS};
}

export function fetchAuthorSuccess(authors) {
    return {type: ActionTypes.FETCH_AUTHORS_SUCCESS, authors};
}