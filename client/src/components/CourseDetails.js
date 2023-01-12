import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
import Books from "./Books";
import { useParams } from 'react-router-dom'
import cup from "../assets/IMG-3217.jpg";
import cap from "../assets/IMG-3225.jpg";
import cep from "../assets/IMG-3222.jpg";
import cop from "../assets/IMG-3219.jpg";
import coup from "../assets/IMG-3224.jpg";
import bup from "../assets/IMG-3221.jpg";


function CourseDetails () {
  const { id } = useParams();
  // const [courseid] = useState(1)
    const [course, setCourse] = useState([]);
    
   

    const fetchCourse = () => {
        fetch(`/api/v1/courses/${id}`)
          .then(response => {
            return response.json()
          })
          .then(course => {
            setCourse(course)
          })
      }
    
      useEffect(() => {
        fetchCourse()
      }, [])

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
            <div className="container">
              <div className="dis">
              <h6 className="course-text"> <i className="fa-solid fa-arrow-left"></i> <a className="main-color" href="/courses">Courses </a> </h6>
               <p className="tex">Become A Web Developer</p>
              </div>
            <h5 className="text-center mt-1"><b>Learning Videos</b></h5>
            <div className='container my-5 py-5' key={course.id}>
        <div className='row d-flex justify-content-center' key={course.id}>
        <div className="card" >
          {/* {
            course.videos.map((video) => {
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
          } */}
        </div>
        </div>
      </div>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src={cup} alt="" className="card-img-new"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cap} alt="" className="card-img-new"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cep} alt="" className="card-img-new"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cop} alt="" className="card-img-new"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={coup} alt="" className="card-img-new"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={bup} alt="" className="card-img-new"></img>
        </div>
      </div>
      </div>
    </div>
      
      <Books/>  

            </div>
    
    )
}

export default CourseDetails;