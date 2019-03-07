import React, {Component} from 'react';
import './App.css';
import Routes from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./common/header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
