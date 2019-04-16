import React from "react";

let AddCourserPage = (props) => (
    <div>
        <h1 className="course-page-header">Add Course Form</h1>
        <form>
            <div className="form-group">
                <label htmlFor="course">Course Title :</label>

                <input name="title" id="title" className="form-control" type="text"
                       value={props.course.title}
                       onChange={props.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Course Category :</label>

                <input name="category" id="category" className="form-control" type="text"
                       value={props.course.category}
                       onChange={props.onChange}/>
            </div>

            <div className="form-group">
                <select name="authorId" className="form-control custom-select" onChange={props.onChange}>
                    <option selected>Select Author</option>
                    {props.authors ? props.authors.map(author => <option key={author.id}
                                                                         value={author.id}>{author.name}</option>) : null}
                </select>
            </div>

            <button type="submit" className="btn btn-primary"
                    onClick={props.onSave}>{props.saving ? "Saving..." : "Save"}</button>
        </form>


    </div>
);

export default AddCourserPage;

