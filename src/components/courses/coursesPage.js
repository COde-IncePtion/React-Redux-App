import React from "react";
import {connect} from "react-redux";
import CoursesList from "./coursesList";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import * as authorActions from "../../actions/authorActions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    };

    componentDidMount() {
        this.props.courseActions.fetchCourses();
        this.props.authorActions.fetchAuthors();
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
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(a => a.id === course.authorId).name
            }
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        courseActions: bindActionCreators(courseActions, dispatch),
        authorActions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);