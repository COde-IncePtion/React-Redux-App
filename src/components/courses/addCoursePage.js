import React from "react";

class AddCourserPage extends React.Component {
    render() {
        return (
            <div className="form-layout">
                <h1>Add Course Form</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="course-title">Course Title :</label>

                        <input name="course-title" id="course-title" className="form-control" type="text"
                               value={this.props.course.title}
                               onChange={this.props.onTitleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
                </form>
            </div>
        );
    }
};

export default AddCourserPage;

