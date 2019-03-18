import React from "react";
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from "redux";
import CoursesList from "./coursesList";
import {Link} from "react-router-dom";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    };

    render() {
        return (
            <div>
                <h1>Courses Available</h1>
                <CoursesList courses={this.props.courses}/>
                <Link to="/add-course">Add Course</Link>
            </div>
        );
    };
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);