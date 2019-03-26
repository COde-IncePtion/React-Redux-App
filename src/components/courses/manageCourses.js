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
                title: "",
                authorId: 2,
                category: ""
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    render() {
        return (
            <div>
                <AddCourserPage course={this.state.course} onSave={this.onSave} onChange={this.onChange}/>
            </div>
        );
    }

    onChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let course = this.state.course;
        course[field] = value;
        this.setState({course: course});
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
        alert("saved successfully");
        this.props.history.push('/courses');

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