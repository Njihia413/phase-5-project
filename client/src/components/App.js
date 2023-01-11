import React from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";
import Login from "./Login";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Courses from "../pages/Courses";
import About from "./About";

function App() {

  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
      {/* {console.log(user)} */}

      {/* <main>
        {user ? (
          <div>
                
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/assessments" element={<Assessments />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<Course />} />
                {/* <Route path="/Footer" element={<Footer/>} /> */}
              {/* </Routes>
            <UserNavbar/>
             
          </div>

        ) : (
          <Routes>
        )}
      </main> */} 
    </div>
  );
}

export default App;  
