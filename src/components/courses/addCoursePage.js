import React from "react";

class AddCourserPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Course Form</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="course">Course Title :</label>

                        <input name="title" id="title" className="form-control" type="text"
                               value={this.props.course.title}
                               onChange={this.props.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Course Title :</label>
                        <input name="category" id="category" className="form-control" type="text"
                               value={this.props.course.category}
                               onChange={this.props.onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button>
                </form>
            </div>
        );
    }
};

export default AddCourserPage;

