
import React  from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
//import Footer from "./Footer";
import About from "./About";
import Courses from "./Courses";
//import ContactUs from "./ContactUs";

import CourseDetails from "./CourseDetails";
import Grades from "../pages/Grades";
import TeacherDashboard from "../pages/TeacherDashboard";
import TeacherCourses from "../pages/TeacherCourses";
import TeacherAssessments from "../pages/TeacherAssessments";
import TeacherGrades from "../pages/TeacherGrades";
import BookDialog from "./BookDialog";
import StudentAssessment from "./StudentAssessment";
import Dashboard from './StudentDashboard'


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
          <Route path="/grades" element={<Grades/>} /> 
           {/* <Route path="/course" element={<Course/>} /> */}
          <Route path="/courses/:courseId" element={<CourseDetails/>} />
          <Route path="/courses/book/details" element={<BookDialog/>} />



          
          <Route path= "teachercourses"  element={<TeacherCourses/>} />
          <Route path= "teacherassessments"  element={<TeacherAssessments/>} />
          <Route path= "teachergrades"  element={<TeacherGrades/>} />
          <Route path= "/teacherdashboard"  element={<TeacherDashboard/>} />
         


           <Route path= "/Dashboard" element={<Dashboard/>}/> 
           <Route path= "/StudentAssessment" element={<StudentAssessment/>}/> 
          
         
              
      </Routes>
        {/* <Footer/>   */}
    </div>
  );
}

export default App;  
