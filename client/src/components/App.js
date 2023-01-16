
import React, { useEffect} from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";

// import ContactUs from "./ContactUs";
import About from "./About";
import Courses from "./Courses";
// import ContactUs from "./ContactUs";
// import Courses from "./Courses";
// import Course from "./Course";

import Dashboard from "./Dashboard"
import CourseDetails from "./CourseDetails";
import TeacherDashboard from "../pages/TeacherDashboard";

function App() {
  
  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

            {/* <Route path="/contact" element={<ContactUs />} />     */}
          <Route path="/courses" element={<Courses/>} /> 
          <Route path="/about" element={<About/>} /> 
           {/* <Route path="/course" element={<Course/>} /> */}
          <Route path="/courses/:courseId" element={<CourseDetails/>} />
          <Route path= "teacherdashboard"  element={<TeacherDashboard/>} />
          <Route path= "/Dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;  
