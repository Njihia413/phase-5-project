import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function CourseDetails() {
  
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  

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
      <br /> 
      <Link className='btn btn-2'to={`/courses`}><p className="course-text">Courses <i className="fa-solid fa-arrow-left"></i></p></Link>
      <div className="container">
        <h2 className="detsh2" key={course.id}>{course.name}</h2>

        <h4 className="ctitles">Learning Videos</h4>
        <div class="wat" >
        {course.videos.map((video) => (
          <CardGroup  style={{  width: "25rem" , height: "20%"}} key={video.id}>
            <div className="card video-card-positioning">
              <iframe
              className="myvide"
                width="354px"
                height="190px"
                border-radius="20px"
                src={video.video_url}
                title={video.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1 className="videoname"> {video.name}</h1>
            </div>
            
          </CardGroup>
        ))}
        </div>
        <br/> <br/> <br/>
        <h4 >Reading Materials</h4>
        <br/><br/><br/>
        <div className="wat">

        
        {course.books.map((book) => {
              return (
                <div >
                <CardGroup style={{  width: "20rem" , height: "100%"}}key={course.id}>
                <Link  to={`/bookdetails`}>
                  <Card.Img variant = "top"className= "cimg" src={book.image_url} alt={book.name} />
                  </Link>
                  <br />
                  <br />
                </CardGroup>
              </div>

              )
            })}
            </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CourseDetails;


