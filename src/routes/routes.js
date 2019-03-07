import React from "react";
import UserList from "../components/users/userList";
import HomePage from "../components/homePage";
import {Route, Switch} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/users' component={UserList}/>
    </Switch>
);

export default Routes;


