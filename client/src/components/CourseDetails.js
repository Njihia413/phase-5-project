import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <Link className='btn btn-2'to={`/courses`}><p className="course-text">Courses <i className="fa-solid fa-arrow-left"></i></p></Link>
      <div className="container">
        <h2 key={course.id}>{course.name}</h2>

        <h4>Videos</h4>
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
        <h4>Reading Materials</h4>
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
    </div>
  );
}

export default CourseDetails;
