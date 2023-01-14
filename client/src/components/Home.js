import React from "react";
import Enroll from "./Enroll";
import HomeBanner from "./HomeBanner";
import Newsletter from "./Newsletter";
import PopularCourses from "./PopularCourses";


function Home () {
    return (
        <div>
            <HomeBanner/>
            <PopularCourses/>
            <Enroll/>
            <Newsletter/>
        </div>
        
    )
}

export default Home;
