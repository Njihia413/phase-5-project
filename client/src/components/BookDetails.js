import React from "react";
import Navbar from './Navbar';
import ReviewForm from "../pages/ReviewForm";
import {  Link } from 'react-router-dom'

const BookDetails = () => {
  
  return (
    <div>
      <section className="bookdetails">
      <div className="bg-course">
        <Navbar />
        <div className="row">
          <div className="col">
            <div className="intro">
              <h1>
                Get to know more about a course's <br></br> reading materials<br></br>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
              <div className="dis">
              <p className="course-text"> <i className="fa-solid fa-arrow-left"></i> <a className="main-color" href="/CourseDetails">Course Details </a> </p>
               <p className="tex">Eloquent Javascript</p>
              </div>
             
              
<ReviewForm/>
<div className = 'hiddenLinks'>
              <Link to = '/ReviewForm'>Review</Link>
 
</div>
</div>
  )
}
export default BookDetails