import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
// import { useNavigate}  from 'react-router-dom'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Courses() {
// const navigate = useNavigate()
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const request = fetch('/api/v1/courses');
      const response = await request;
      const parsed = await response.json();
      setCourses(parsed);
    }

    getCourses();
  }, []);

  if (courses === undefined) {
    return null;
  }
   console.log(courses)

   
  return (
  
    <div className='courses'>
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
                       
                      }}className='btn btn-2'to={`/Dashboard`}><p className="course-text">Dashboard <i className="fa-solid fa-arrow-left"></i></p></Link>
          
       <div key={courses.id}>
        <div key={courses.id}>
        <div class="watch" >
          {
            courses.map((course) => {
              return (
                <div className="watches">
                <CardGroup style={{ width: "25rem" , height: "100%"}} key={course.id}>
                  <Card.Img variant="top" src={course.image_url} alt={course.name} />{" "}
                  <br />
                  <br />
                  <Card.Body>
                  <Link  to={`/courses/${course.id}`}>
                    <Card.Title
                    className="ttitle"
                      style={{
                        fontWeight: "500",
                        color: "whitesmoke",
                        fontSize: "18px",
                        padding: "20px",
                      }}
                    >
                      {course.name}
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

export default Courses;




