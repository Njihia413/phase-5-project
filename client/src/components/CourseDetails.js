import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
// import Books from "./Books";
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const [course, setCourse] = useState([]);
    const {courseId} = useParams();
    // console.log (courseId);
   
    useEffect(() => {
      fetch(`/api/v1/courses/${courseId}`)
        .then(response => {
          return response.json()
        })
        .then(course => {
          setCourse(course)
        })
    }, [courseId])
    if (course=== undefined) {
      return null;
    }
     console.log(course)
   
  
     
  
  return (
    <div className="">
     <section className="course-details">
         <div className="bg-coursedetails">
            <Navbar/> <br/> <br/><br/> <br/> <br/><br/><br/>
        <div className="row">
            <div className="col">
                <div className="intro-p">
                    <h2>You can enroll to this course to gain access <br></br>   to the materials that have been<br></br> attached to it online <br></br> today.</h2>
                </div>
            </div>
        </div>
         </div>
     </section> <br/> <br/>
     <div className="card" >
           {/* {
            course.videos.map((video) => (
               
                <div>
                  <div className='col-md-4' key={video.id} >
                    <div className="card text" key={video.id}>
                    <video src={video.video_url} className="card-img-top" alt="..." ></video>
                    </div>
                  </div>
                </div>
              
            ))
          }  */}
        </div>
     </div>
  )
}

export default CourseDetails