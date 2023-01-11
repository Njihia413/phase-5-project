import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
import Books from "./Books";

function CourseDetails () {
    const [videos, setVideos] = useState([])
   

    const fetchVideo = () => {
        fetch("/videos")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setVideos(data)
          })
      }
    
      useEffect(() => {
        fetchVideo()
      }, [])

      if (videos=== undefined) {
        return null;
      }
       console.log(videos)
    
      

    return (
        <div className="">
               <section className="course-details">
            <div className="bg-coursedetails">
                <Navbar/> <br/> <br/><br/> <br/> <br/><br/><br/> <br/><br/>
            <div className="row">
                <div className="col">

                    <div className="intro-p">
                        <h1>You can either enroll for this course to <br></br> gain access and also to the materials <br></br> been attached to it online only.</h1>
                    </div>
                </div>
            </div>
            </div>
        </section> <br/>
            <div className="container">
            <p className="course-text"> <i className="fa-solid fa-arrow-left"></i> <a className="main-color" href="/courses">Courses </a> </p>
            <p className="text-center mt-1">Become A Web Developer</p>
            <h5 className="text-center mt-1"><b>Learning Videos</b></h5>
            <div className='container my-5 py-5' key={videos.id}>
        <div className='row d-flex justify-content-center' key={videos.id}>
        <div class="card" >
          {
            videos.map((video) => {
              return (
                <div>
                  <div className='col-md-4' key={video.id} >
                    <div className="card text" key={video.id}>
                    <img src={video.video_url} className="card-img-top" alt="..." />
                      <div className="card-body" key={video.id}>
                        <h3 className="card-title">{video.name}</h3> 
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div> 
      <Books/>  

            </div>
        </div>
    )
}

export default CourseDetails;