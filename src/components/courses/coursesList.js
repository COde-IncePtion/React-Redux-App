import React from 'react';


let CoursesList = (props) => (
    <div>
        {
            props.courses.map(course =>
            <div key={course.title}>{course.title}</div>
            )
        }
    </div>
);


export default CoursesList;

