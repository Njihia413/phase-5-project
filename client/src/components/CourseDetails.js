import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";


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
      <br /> <br />
      <Link className='btn-3'to={`/enrolnow`}><p className="course-text">Enrol Now</p></Link>
      <Link className='btn btn-2'to={`/courses`}><p className="course-text">Courses <i className="fa-solid fa-arrow-left"></i></p></Link>
      <div className="container">
        <h2 className="detsh2" key={course.id}>{course.name}</h2>

        <h4 className="ctitles">Learning Videos</h4>
        {course.videos.map((video) => (
          <div className="col-md-7" key={video.id}>
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
            <div className="card-name">
              <p>{video.name}</p>
            </div>
          </div>
        ))}
        <h4 className="ctitles">Reading Materials</h4>
        {course.books.map((book) => (
          <div className="col-md-3" key={book.id}>
            <Link  to={`/bookdetails`}>
            <div className="card">
              <img className="mebooks" src={book.image_url} />
            </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default CourseDetails;
