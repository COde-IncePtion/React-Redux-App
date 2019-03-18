import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {getCourses} from './api/courseApi';

getCourses().then((res) => {
                const store = configureStore({
                    courses: res
                });

                ReactDOM.render(
                    <Provider store={store}>
                        <App/>
                    </Provider>, document.getElementById("root"));
            })
            .catch((err) => console.log(err));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
