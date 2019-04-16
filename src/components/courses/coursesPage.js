import React from "react";
import {connect} from "react-redux";
import CoursesList from "./coursesList";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import * as authorActions from "../../actions/authorActions";
import * as apiActions from "../../actions/apiActions";
import AppLoader from "../../common/spinner";


class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.deleteCourse = this.deleteCourse.bind(this);
    };

    componentDidMount() {
        this.props.apiActions.startApiCall();
        this.props.courseActions.fetchCourses();
        this.props.apiActions.startApiCall();
        this.props.authorActions.fetchAuthors();
    };

    render() {
        return (
            this.props.showLoader ? <AppLoader/> :
                <div>
                    <h1 className="course-page-header">Courses Available</h1>
                    <CoursesList courses={this.props.courses} deleteCourse={this.deleteCourse}/>
                    <button className="btn btn-outline-primary add-course-btn"><Link to="/add-course">Add Course</Link>
                    </button>
                </div>
        );
    };

    deleteCourse(courseId, event) {
        event.preventDefault();
        this.props.courseActions.deleteCourse(courseId);
    };
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(a => a.id == course.authorId).name
            }
        }),
        showLoader: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        courseActions: bindActionCreators(courseActions, dispatch),
        authorActions: bindActionCreators(authorActions, dispatch),
        apiActions: bindActionCreators(apiActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);