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
                props.courses.map(course =>
                    <tr key={course.id}>
                        <th scope="row">{course.id}</th>
                        <td>{course.title}</td>
                        <td>{course.category}</td>
                        <td>{course.authorName}</td>
                        <td><button onClick={props.deleteCourse.bind(this, course.id)}><i className="far fa-trash-alt"></i></button></td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
);


export default CoursesList;

