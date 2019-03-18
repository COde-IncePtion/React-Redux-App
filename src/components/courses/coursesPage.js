import React from "react";
import {connect} from "react-redux";
import CoursesList from "./coursesList";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    };

    componentDidMount() {
        this.props.actions.loadCourses();
    }

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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);