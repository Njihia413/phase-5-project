import React from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Courses from "../pages/Courses";
import ContactUs from "./ContactUs";
// import Courses from "./Courses";
import About from "./About";
import Course from "./Course";
import CourseDetails from "./CourseDetails";

function App() {

  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />   
          <Route path="/courses" element={<Courses/>} />
          <Route path="/about" element={<About/>} />es
          <Route path="/course" element={<Course/>} />
          <Route path="/CourseDetails" element={<CourseDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;  
