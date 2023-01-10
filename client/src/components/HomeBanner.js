import React from "react";
import Navbar from "./Navbar";

function HomeBanner () {
    return (
        <section className="home">
            <div className="bg-home">
                <Navbar/>
            <div className="row">
                <div className="col">
                    <div className="intro">
                        <h1>MasomoDigi. Learning <br></br> Made Easy</h1>
                    </div>
                    <div className="intro-p">
                        <p>Interact with our qualified teachers</p>
                    </div>
                    <div className="intro-p2">
                       <h3>A school where you can learn at your own pace, in a <br></br> friendly and supportive environment.</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HomeBanner;