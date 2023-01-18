import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate }  from 'react-router-dom'


function CourseDetails() {
  const navigate = useNavigate()
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [setCourseId] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
      .then((r) => r.json())
      .then((course) => setCourse(course));
  }, [courseId]);

  if (!course) return <h2>Loading course data...</h2>;
  
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
      <br /> <br />
      <Link className='btn btn-2'to={`/courses`}><p className="course-text">Courses <i className="fa-solid fa-arrow-left"></i></p></Link>
      <div className="container">
        <h2 className="detsh2" key={course.id}>{course.name}</h2>

        <h4 className="ctitles">Learning Videos</h4>
        <div class="watches" >
        {course.videos.map((video) => (
          <CardGroup style={{ width: "25rem" , height: "100%"}} key={video.id}>
            <div className="card">
              <iframe
                width="354px"
                height="190px"
                border-radius="20px"
                src={video.video_url}
                title={video.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Title>
              {video.name}
            </Card.Title>
          </CardGroup>
        ))}
        </div>
        <h4 >Reading Materials</h4>
        {course.books.map((book) => {
              return (
                <div className="watches">
                <CardGroup style={{ width: "25rem" , height: "100%"}} key={course.id}>
                <Link  to={`/bookdetails`}>
                  <Card.Img variant="top" src={book.image_url} alt={book.name} />
                  </Link>
                  <br />
                  <br />
                </CardGroup>
              </div>

              )
            })}
      </div>
      <Footer/>
    </div>
  );
}

export default CourseDetails;


