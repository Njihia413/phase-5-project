import React from "react";
import Courses from "./Courses";
import Enroll from "./Enroll";
import HomeBanner from "./HomeBanner";
import Newsletter from "./Newsletter";

function Home () {
    return (
        <div>
            <HomeBanner/>
            <Courses/>
            <Enroll/>
            <Newsletter/>
        </div>
        
    )
}

export default Home;
