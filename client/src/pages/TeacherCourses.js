import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import "../css/teachercourse.css"


function TeacherCourses() {
    const [courses, setCourses] = useState([]);
    const [indexToEdit, setIndexToEdit] = useState(-1);
    useEffect(() => {
        async function getCourses() {
            const request = fetch("/api/v1/courses");
            const response = await request;
            const parsed = await response.json();
            setCourses(parsed);
        }

        getCourses();
    }, []);

    if (courses === undefined) {
        return null;
    }
    console.log(courses);
    

    return (
        <div className='teachercourse'>
            
                <Sidebar />
                <div className='teachercourses' >
                <div className="row justify-content-center ">
                    <div className="col-auto">
                        <table className="table table-responsive">
                            <thead >
                                <tr>
                                    <th>Courses</th>
                                    <th>Image_url</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, recordIdx) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={course.name}
                                                    disabled={recordIdx !== indexToEdit}
                                                    onChange={(val) => {
                                                        let _courses = [...courses];
                                                        _courses[indexToEdit] = val;
                                                        setCourses(_courses);
                                                    }}
                                                    onBlur={() => {
                                                        setIndexToEdit(-1);
                                                    }}
                                                />
                                               
                                            </td>
                                            <td>
                                            <input
                                                    type="text"
                                                    value={course.image_url}
                                                    disabled={recordIdx !== indexToEdit}
                                                    onChange={(val) => {
                                                        let _courses = [...courses];
                                                        _courses[indexToEdit] = val;
                                                        setCourses(_courses);
                                                    }}
                                                    onBlur={() => {
                                                        setIndexToEdit(-1);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    setIndexToEdit(recordIdx);
                                                }}>
                                                    <i className="fa-solid fa-pen"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


                </div>
               
          


        </div>
    )
}

export default TeacherCourses