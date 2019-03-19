import React from 'react';


let CoursesList = (props) => (
    <div>

        <table className="table table-hover" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
            </tr>
            </thead>
            <tbody>
            {
                props.courses.map(course =>
                    <tr key={course.id}>
                        <th scope="row">{course.id}</th>
                        <td>{course.title}</td>
                        <td>{course.category}</td>
                    </tr>
                )
            }

            </tbody>
        </table>


    </div>
);


export default CoursesList;

