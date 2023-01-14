
import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";
import Courses from "./Courses";
import About from "./About";
import CourseDetails from "./CourseDetails";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp setStoredToken={setStoredToken}/>} />
          <Route path="/login" element={<Login setStoredToken={setStoredToken}/>} />
          <Route path="/about" element={<About/>} />
         {/* <Route path ="/contact" element={<ContactUs />} />  */}
          <Route path="/courses" element={<Courses/>} />
          
          <Route path="/CourseDetails" element={<CourseDetails/>} />

          {
            
          }
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;  
