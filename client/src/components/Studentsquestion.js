import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate }  from 'react-router-dom'


function Studentsquestion() {
    const navigate = useNavigate()
  const { assessmentId } = useParams();
  const [assessment, setAssessment] = useState(null);
  const [setAssessmentId] = useState(null);
  useEffect(() => {
    fetch(`/api/v1/assessments/${assessmentId}`)
      .then((r) => r.json())
      .then((assessment) => setAssessment(assessment));
  }, [assessmentId]);
  if (!assessment) return <h2>Loading course data...</h2>;
  return (
    <div className="course-details">
      <section className="course-details">
        <div className="bg-coursedetails">
          <Navbar /> <br /> <br />
          <br /> <br /> <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <div className="intro-p">
                <h2>
                  You can enroll to this course to gain access <br></br> to the
                  materials that have been<br></br> attached to it online{" "}
                  <br></br> today.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link className='btn btn-2'to={`/courses`}><p className="course-text">Assessment <i className="fa-solid fa-arrow-left"></i></p></Link>
      <div className="container">
        <h2 className="detsh2" key={assessment.id}>{assessment.assessment_name}</h2>
        <h4 className="ctitles">Course questions</h4>
        <div class="watches" >
        {assessment.questions.map((question) => (
          <CardGroup  style={{  width: "25rem" , height: "20%"}} key={question.id}>
            <div className="card video-card-positioning">
              <h1 className="name"> {question.prompt}</h1>
              <h1 className="name"> {question.choices}</h1>
              <h1 className="name"> {question.answer}</h1>

            </div>
          </CardGroup>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default Studentsquestion