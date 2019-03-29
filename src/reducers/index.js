import {combineReducers} from 'redux-loop';
import courses from './courseReducers';
import authors from './authorReducers';
import apiCallsInProgress from './apiReducers';


const rootReducer = combineReducers({
    courses, authors, apiCallsInProgress
});

export default rootReducer;
