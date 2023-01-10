import React from "react";
import cap from "../assets/IMG-3214.jpg"

function Enroll () {
   return (
    <section className="enroll">
        <div className="row">
            <div className="col-md-7">
                <h1 className="enroll-heading">Learning made<br></br> easy. Enroll now!</h1>
                <p className="enroll-text">We cover several subjects with simplified content to <br></br> enhance 
                your understanding. Our teachers are <br></br> available 24hours.
                </p>
                <button className="btn btn-primary" id="enroll-btn">Enroll Now</button>
            </div>
            <div className="col-md-5">
                <img src={cap} alt="" className="enroll-img"></img>
            </div>
        </div>
    </section>
   )
}

export default Enroll;