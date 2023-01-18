import React, { useState } from 'react'
import Sidebar from "./Sidebar"
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import "../css/teacherassessment.css"

function TeacherAssessments() {
  const [page, setPage] = useState("List");

  return (
    <div className='question'>
      <Sidebar />
      <main  className='questionmain'>

        <AdminNavBar onChangePage={setPage} />
        {page === "Form" ? <QuestionForm /> : <QuestionList />}
      </main>

    </div>

  );
}


export default TeacherAssessments