import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
// import BookDetails from './reusable-compontents/BookDetails'
// import "../styles/BookDetails.css"
function BookDialog() {
  return (
    <div >
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
    <div className="parent-container">
      {/* <BookDetails/> */}
    </div>
      <Footer/>
    </div>
  )
}

export default BookDialog