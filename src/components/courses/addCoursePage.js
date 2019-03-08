import React from "react";

class AddCourserPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    render() {
        return (
            <div className="form-layout">
                <h1>Add Course Form</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="course-title">Course Title :</label>

                        <input name="course-title" id="course-title" className="form-control" type="text" value={this.state.course.title}
                               onChange={this.onTitleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
                </form>
            </div>
        );
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onSave() {
        alert("saved successfully");
    }
};


export default AddCourserPage;