import React, { useState, useRef } from 'react';
import "../css/YearlySchedule.css";

function YearlySchedule(props) {
    const [list, setList] = useState(props.data);
    const [dragging, setDragging] = useState(false);

    const dragCourse = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('drag starting...', params);
        dragCourse.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0);
        setDragging(true);
    }

    const handleDragEnter = (e, targetCourse) => {
        console.log('Entering drag...', targetCourse);
        const currentCourse = dragCourse.current;

        if (e.target !== dragNode.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[targetCourse.grpIndex].courses.splice(targetCourse.courseIndex, 0, newList[currentCourse.grpIndex].courses.splice(currentCourse.courseIndex, 1)[0])
                dragCourse.current = targetCourse;
                return newList;
            })
        }
    }

    const handleDragEnd = () => {
        console.log('Ending drag...');
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragCourse.current = null;
        dragNode.current = null;
        setDragging(false);
    }

    const getStyles = (course) => {
        if (dragCourse.current.courseIndex === course.courseIndex) {
            return "course-style current";
        }
    
        return "course-style";
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {props.year} Year
            </div>
            <div className="yearly-schedule-body">
                <div className='quarter'>
                    Fall
                    {list.map((grp, grpIndex) => (
                        <div key={grp.title}>
                        {grp.courses.map((course, courseIndex) => (
                            <div 
                                className={dragging ? getStyles(grpIndex, courseIndex) : "course-style"} 
                                draggable 
                                key={course} 
                                onDragStart={(e) => {handleDragStart(e, {grpIndex, courseIndex})}}
                                onDragEnter={dragging ? (e) => {handleDragEnter(e, {grpIndex, courseIndex})} : null} 
                            >
                                {course}
                            </div>
                        ))}
                        </div>
                    ))}
                </div>
                
                <div className='quarter'>
                    Winter
                    
                </div>

                <div className='quarter'>
                    Spring
                    
                </div>

                <div className='quarter'>
                    Summer
                    
                </div>
            </div>
        </div>
    )
}

export default YearlySchedule
