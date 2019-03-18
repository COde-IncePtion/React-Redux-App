import React from "react";
import UserList from "../components/users/userList";
import HomePage from "../components/homePage";
import {Route, Switch} from 'react-router-dom';
import ManageCourses from "../components/courses/manageCourses";
import coursesPage from "../components/courses/coursesPage";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/users' component={UserList}/>
        <Route exact path='/courses' component={coursesPage}/>
        <Route exact path='/add-course' component={ManageCourses}/>
    </Switch>
);

export default Routes;


