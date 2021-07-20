import React from 'react';
import "../css/AddCourses.css";
import Searchbar from './Searchbar';

function AddCourses() {
    return (
        <div className="wrapper">
            <div className="heading">
                Add Courses
            </div>
            <div className="add-courses-body">
                <Searchbar />

                <div className= "selected_course">
                    CS 143 | Units: 4.0
                </div>

                <div className="course_description">
                    Data Management Systems
                    Units: 4.0

                    Lecture, four hours; laboratory, two hours; outside study, six hours. Enforced requisite: course 32 or Program in Computing 10C. 

                    Information systems and database systems in enterprises. File organization and secondary storage structures. Relational model and relational database systems. Network, hierarchical, and other models. Query languages. Database design principles. Transactions, concurrency, and recovery. Integrity and authorization. 

                    Letter grading.
                </div>
            </div>
        </div>
    )
}

export default AddCourses
