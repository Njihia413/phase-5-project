import React from "react";

function Newsletter () {
    return (
        <section className="newsletter">
            <div className="row  d-flex justify-content-center">
                <div className="newsletter-text">
                    <h1 className="mt-5">Subscribe to our newsletter</h1>
                    <p className="mt-4">Get notified of new learning resources and updates</p>
                    
                </div>
                <div className="col-md-4">
                    <div className="newsletter-form">
                        <form className="news">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Input your email......" required></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-warning" type="submit">
                                            <small>Try for free</small>
                                        </button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;