import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
// import Books from "./Books";
import { useParams, Link } from 'react-router-dom'

function CourseDetails() {
  const {courseId} = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
      .then((r) => r.json())
      .then((course) => setCourse(course));
  }, [courseId]);

  if (!course) return <h2>Loading game data...</h2>;

  return (
    <div className='container'>
      <h2 key={course.id}>{course.name}</h2>

      <h4>Videos</h4>
      {course.videos.map((video) => (
          <div className="col-md-3" key={video.id}>
            <div className="card">
          <video controls >
      <source  src={video.video_url} type="video/mp4"/>
     </video>
        </div>
        </div>
      ))}
      <h4>Reading Materials</h4>
      {course.books.map((book) => (
        <div className="row">
          <div className="col-md-3" key={book.id}>
            <div className="card">
          <img src={book.image_url}/>
          <Link className='btn btn-success'to={`/bookdetails`}> More Info</Link>
           </div>

        </div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails

  