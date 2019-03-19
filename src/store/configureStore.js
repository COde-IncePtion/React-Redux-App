import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {install} from 'redux-loop';

const enhancer = compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    install(),
);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
};