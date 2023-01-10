import React from "react";
import Courses from "./Courses";
import Enroll from "./Enroll";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import Newsletter from "./Newsletter";

function Home () {
    return (
        <>
            <HomeBanner/>
            <Courses/>
            <Enroll/>
            <Newsletter/>
            <Footer/>
        </>
        
    )
}

export default Home;
