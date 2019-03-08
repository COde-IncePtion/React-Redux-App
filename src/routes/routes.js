import React from "react";
import UserList from "../components/users/userList";
import HomePage from "../components/homePage";
import {Route, Switch} from 'react-router-dom';
import AddCourserPage from "../components/courses/addCoursePage";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/users' component={UserList}/>
        <Route exact path='/add-course' component={AddCourserPage}/>
    </Switch>
);

export default Routes;


