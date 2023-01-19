import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Navbar from "./Navbar";
import Footer from "./Footer";
function StudentAssessment() {

  const [assessments, setAssessments] = useState([]);
  useEffect(() => {
    async function getAssessments() {
      const request = fetch('/api/v1/assessments');
      const response = await request;
      const parsed = await response.json();
      setAssessments(parsed);
    }
    getAssessments();
  }, []);
  if (assessments === undefined) {
    return null;
  }
   console.log(assessments)
  return (
    <div className='assessments'>
      <section className="course-page">
      <div className="bg-courses">
        <Navbar />
        <div className="row">
          <div className="col">
            <div className="intro">
              <h1>
                Checkout our courses <br></br> curated for your E-<br></br>
                Learning
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section> <br/> <br/>
           <div className='course'>
           <Link  style={{
                        paddingLeft: "40px",
                      }}className='btn btn-2'to={`/Dashboard`}><p className="course-text">Dashboard <i className="fa-solid fa-arrow-left"></i></p></Link>
       <div key={assessments.id}>
        <div key={assessments.id}>
        <div class="watch" >
          {
            assessments.map((assessment) => {
              return (
                <div className="watches">
                <CardGroup style={{ width: "25rem" , height: "100%"}} key={assessment.id}>
                 
                  <br />
                  <br />
                  <Card.Body>
                  <Link  to={`/StudentAssessment/${assessment.id}`}>
                    <Card.Title
                    className="ttitle"
                      style={{
                        fontWeight: "500",
                        color: "whitesmoke",
                        fontSize: "18px",
                        padding: "20px",
                      }}
                    >
                      {assessment.assessment_name}
                    </Card.Title>
                    </Link>
                  </Card.Body>
                </CardGroup>
              </div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
    <Footer/>
       </div>
  )
}
export default StudentAssessment;


