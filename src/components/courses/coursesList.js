import React from 'react';


let CoursesList = (props) => (
    <div className="courseListLayout">
        <table className="courseTable table table-hover table-bordered">
            <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Author Name</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {
                props.courses.map((course, props) =>
                    <tr key={course.id}>
                        <th scope="row">{course.id}</th>
                        <td>{course.title}</td>
                        <td>{course.category}</td>
                        <td>{course.authorName}</td>
                        <td><span onClick={props.deleteCourse}><i className="far fa-trash-alt"></i></span></td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
);


export default CoursesList;

