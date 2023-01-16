import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
// import Books from "./Books";
import { useParams } from 'react-router-dom'
// import ReactPlayer from 'react-video-js-player';
import { Link} from 'react-router-dom'

function CourseDetails() {
  const {courseId} = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
      .then((r) => r.json())
      .then((course) => setCourse(course));
  }, [courseId]);

  if (!course) return <h2>Loading  data...</h2>;

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
          <div className="col-md-3" key={book.id}>
            <div className="card">
          <img src={book.image_url}/>
          <Link className='btn btn-success'to={`/bookdetails`}> More Info</Link>
        </div>

        </div>
      ))}
    </div>
  );
}

export default CourseDetails

  //  function CourseDetails() {
  //   const [course, setCourse] = useState([]);
  //   const {courseId} = useParams();
  //   console.log (courseId);
   
  //   useEffect(() => {
  //     fetch(`/api/v1/courses/${courseId}`)
  //         .then ( response => {
  //           if (response.ok) {
  //             response.json() .then (data =>  {
  //               setCourse(data)
  //             }
  //               )
  //           }
  //         }

  //         )
  //       },[courseId])
      
  //    console.log(course)
   
 
   
  
     
  
  // return (
  //   <div className="">
  //    <section className="course-details">
  //        <div className="bg-coursedetails">
  //           <Navbar/> <br/> <br/><br/> <br/> <br/><br/><br/>
  //       <div className="row">
  //           <div className="col">
  //               <div className="intro-p">
  //                   <h2>You can enroll to this course to gain access <br></br>   to the materials that have been<br></br> attached to it online <br></br> today.</h2>
  //               </div>
  //           </div>
  //       </div>
  //        </div>
  //    </section> <br/> <br/>
     {/* <div className="card" >
            {
            course.videos.map((video) => (
               
                <div>
                  <div className='col-md-4' key={video.id} >
                    <div className="card text" key={video.id}>
                    <video src={video.video_url} className="card-img-top" alt="..." ></video>
                    </div>
                  </div>
                </div>
              
            ))
          }  
        </div> */}
//      </div>
//   )
// }
