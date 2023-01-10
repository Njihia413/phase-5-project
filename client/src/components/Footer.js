import React from 'react'
import './Footer.css'

export default function Footer(){
    return (
        <>
            
            {/* Newsletter */}
            
            <section className="newsletter py-5">

                <div className="container">

                    <div className="newsletter-header mb-4">
                        Subscribe our newsletter
                    </div>

                    <div className="newsletter-text mb-4">
                        Get notified of new routes and discounts on the go
                    </div>

                    <div className="col-lg-8 col-xl-7 mx-auto">
                        <div className="input-group">
                            <input className="form-control" placeholder="Your Email" />

                            <div className="input-group-append">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </>
    )
}