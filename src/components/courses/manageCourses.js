import React from "react";
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from "redux";
import AddCourserPage from "./addCoursePage";

class ManageCoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    render() {
        return (
            <div>
                <AddCourserPage course={this.state.course} onSave={this.onSave} onTitleChange={this.onTitleChange}/>
            </div>
        );
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
        alert("saved successfully");
        this.props.history.push('/courses')

    }
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


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);