import React from "react";
import Navbar from './Navbar';
import Reviews from "../pages/Reviews";

const BookDetails = () => {
  return (
    <div>
      <section className="course">
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
<Reviews/>
</div>
  )
}
export default BookDetails