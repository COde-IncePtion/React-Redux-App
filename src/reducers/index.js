import { combineReducers } from 'redux-loop';
import courses from './courseReducers';


const rootReducer = combineReducers({
   courses
});

export default rootReducer;
