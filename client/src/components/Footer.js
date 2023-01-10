import React from "react";

function Footer () {
    return (
        <footer className="bg-secondary">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-wrapper">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="footer-heading">Masomo<span>Digi</span></h5>
                                <p className="footer-text">Enroll and learn at your own pace. We <br></br> make learning fun</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="footer-heading">Links</h5>
                                <p className="footer-text">
                                    <p>Home</p>
                                    <p>Courses</p>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="footer-heading">Social</h5>
                                <p className="footer-text">
                                    <p>Instagram</p>
                                    <p>Facebook</p>
                                    <p>Twitter</p>
                                    <p>LinkedIn</p>
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
    )
}

export default Footer;
