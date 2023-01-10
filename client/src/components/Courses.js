import React from "react";
import cup from "../assets/IMG-3217.jpg"
import cap from "../assets/IMG-3225.jpg"
import cep from "../assets/IMG-3222.jpg"
import cip from "../assets/IMG-3218.JPG"
import cop from "../assets/IMG-3219.jpg"
import coup from "../assets/IMG-3224.jpg"
import bup from "../assets/IMG-3221.jpg"
import bip from "../assets/IMG-3228.jpg"

function Courses () {
    return (
        <div className="courses">
            <div className="container">
                <div className="row">
                    <h3 className="text-center mt-4">Popular Courses</h3>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cup} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Become a Social Media Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cap} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Learn Logo Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cep} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Become a Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cip} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Embark on the Journey of Becoming an Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cop} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Get Weekly Shopping Tips</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={coup} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>3 Weeks Photography Bootcamp</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={bup} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>Advance Your 3D Modelling Skills</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={bip} alt="" className="card-img-top"></img>
                            <div className="card-body">
                                <p>How To Have A Good Listening Ear For Music</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="course-text">More Courses <i className="fa-solid fa-arrow-right"></i></p>

            </div>
        </div>
    )
}

export default Courses;