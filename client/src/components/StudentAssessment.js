import React, { useEffect, useState } from 'react'
import Sidebar from '../pages/Sidebar'

function StudentAssessment() {
    const [assessments, setAssessments] = useState([]);
    const [indexToEdit, setIndexToEdit] = useState(-1);
    useEffect(() => {
        async function getAssessments() {
            const request = fetch("/api/v1/assessments");
            const response = await request;
            const parsed = await response.json();
            setAssessments(parsed);
        }

        getAssessments();
    }, []);

    if (assessments === undefined) {
        return null;
    }
    console.log(assessments);
    

    return (
        <div>
            <div>
                <Sidebar />
                <div className="row justify-content-center ">
                    <div className="col-auto">
                        <table className="table table-responsive">
                            <thead >
                                <tr>
                                    <th>assessment</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <t.body>
                                {assessments.map((assessment, recordIdx) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={assessment.name}
                                                    disabled={recordIdx !== indexToEdit}
                                                    onChange={(val) => {
                                                        let _assessments = [...assessments];
                                                        _assessments[indexToEdit] = val;
                                                        setAssessments(_assessments);
                                                    }}
                                                    onBlur={() => {
                                                        setIndexToEdit(-1);
                                                    }}
                                                />
                                               
                                            </td>
                                            <td>
                                            <input
                                                    type="text"
                                                    value={assessment.date}
                                                    disabled={recordIdx !== indexToEdit}
                                                    onChange={(val) => {
                                                        let _assessments = [...assessments];
                                                        _assessments[indexToEdit] = val;
                                                        setAssessments(_assessments);
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
                            </t.body>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default StudentAssessment;