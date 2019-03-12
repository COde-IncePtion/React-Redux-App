import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore({
    courses: [
                {
                    title: "Ashish Rawat"
                },
                {
                    title: "Amit Rawat"
                }
            ]
});


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
