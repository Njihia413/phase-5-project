import React from "react";
import Enroll from "./Enroll";
import HomeBanner from "./HomeBanner";
import Newsletter from "./Newsletter";
import PopularCourses from "./PopularCourses";
import Footer from "./Footer"


function Home () {
    return (
        <div>
            <HomeBanner/>
            <PopularCourses/>
            <Enroll/>
            <Newsletter/>
            <Footer/>
        </div>
        
    )
}

export default Home;
