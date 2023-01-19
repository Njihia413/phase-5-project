
import React, { useEffect, useState } from 'react'
import DashboardNav from './DashboardNav'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import { useNavigate }  from 'react-router-dom'
import Footer from "./Footer";

function Dashboard() {
  
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
   const [searchTerm, setSearchTerm] = useState('');

  return (
    <section>
      <DashboardNav />
      
        <br/> <br/> <br/> <br/> <br/>
       <ul className="">
       <Link className='btn btn-2'to={`/courses`}><p className="course-text">All Courses</p></Link>
       <Link className='btn btn-2'to={`/courses`}><p className="course-text">My Grades</p></Link>
       <Link className='btn btn-2'to={`/StudentAssessment`}><p className="course-text">Assesments</p></Link>
       </ul>
      <div className="dash-search-container">
      <div class="form-outline mb-4">
  <input style={{background: "#EDDFFF", color: "white"}}  value={courses.name}   onChange={e => this.setState({searchValue: e.target.value})} type="text" class="form-control" id="datatable-search-input" placeholder='Search a course here ....'/>
</div>
<div id="datatable">
</div>
        <h5   style={{
                        paddingLeft: "10%",
                        paddingBottom: "1%",
                        fontWeight: "bold",
                      }}>Available Courses</h5>
      </div> 
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
      <Footer/>
</section> 

  )
}
export default Dashboard;