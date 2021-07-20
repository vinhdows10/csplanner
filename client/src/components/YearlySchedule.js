import React from 'react';
import "../css/YearlySchedule.css";

function YearlySchedule(props) {
    return (
        <div className="wrapper">
            <div className="heading">
                {props.year} Year
            </div>
            <div className="yearly-schedule-body">
            
            </div>
        </div>
    )
}

export default YearlySchedule
