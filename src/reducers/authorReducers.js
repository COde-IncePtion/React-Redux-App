import * as ActionTypes from '../actions/authorActionTypes';
import {loop, Cmd} from "redux-loop";
import {getAuthors} from "../api/authorApi";
import {fetchAuthorSuccess} from "../actions/authorActions";

export default function (state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_AUTHORS_SUCCESS:
            return action.authors;

        case ActionTypes.FETCH_AUTHORS:
            return loop([...state],
                Cmd.run(getAuthors,{
                    successActionCreator: fetchAuthorSuccess
                }));
        default:
            return state;

    }
}
