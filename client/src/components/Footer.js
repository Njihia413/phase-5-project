
import React from "react";

function Footer () {
    return (
        <div className="footer">
           <footer className="bg-secondary">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-wrapper d-flex flex-column min-vh-100">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="footer-heading">Masomo<span>Digi</span></h5>
                                <p className="footer-text">Enroll and learn at your own pace. We <br></br> make learning fun</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="footer-heading">Links</h5>
                                <p className="footer-text">
                                    <a className="footer-nav" href="/">Home</a>
                                    <a className="footer-nav" href="/courses">Courses</a>
                                    <a className="footer-nav" href="/about">About Us</a>
                                    <a className="footer-nav" href="/contact">Contact Us</a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="footer-heading">Social</h5>
                                <p className="footer-text">
                                    <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                                    <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                                    <p><i className="fa-brands fa-twitter"></i> Twitter</p>
                                    <p><i className="fa-brands fa-linkedin"></i> LinkedIn</p>
                                </p>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="footer-text">Terms and Conditions</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="footer-text">Privacy Policy</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="footer-text">Copyright ©2023 MasomoDigi </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        </div>
        
    )
}

export default Footer;