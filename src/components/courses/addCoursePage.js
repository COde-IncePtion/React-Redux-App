import React from "react";
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';

class AddCourserPage extends React.Component {
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
            <div className="form-layout">
                <h1>Add Course Form</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="course-title">Course Title :</label>

                        <input name="course-title" id="course-title" className="form-control" type="text"
                               value={this.state.course.title}
                               onChange={this.onTitleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
                </form>
                {this.props.courses.map(course=>
                    <div key={course.title}>{course.title}</div>
                )}
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
        this.props.dispatch(courseActions.createCourse(this.state.course));
        alert("saved successfully");
    }
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}


export default connect(mapStateToProps)(AddCourserPage);