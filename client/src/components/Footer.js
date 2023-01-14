// import React from 'react'
// import './Footer.css'

// export default function Footer(){
//     return (
//         <>
            
//             {/* Newsletter */}
            
//             <section className="newsletter py-5">

//                 <div className="container">

//                     <div className="newsletter-header mb-4">
//                         Subscribe our newsletter
//                     </div>

//                     <div className="newsletter-text mb-4">
//                         Get notified of new routes and discounts on the go
//                     </div>

//                     <div className="col-lg-8 col-xl-7 mx-auto">
//                         <div className="input-group">
//                             <input className="form-control" placeholder="Your Email" />

//                             <div className="input-group-append">
//                                 <button className="btn btn-primary">Sign Up</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </section>
//         </>
//     )
// }

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
    )
}

export default Footer;