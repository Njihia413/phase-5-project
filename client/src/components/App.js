import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import UserNavbar from "./Navbar";
import Assessments from "../pages/Assessments";
import Reviews from "../pages/Reviews";
import Courses from "../pages/Courses";
import Course from "../pages/Course"
import Profile from "../pages/Profile";
import ContactUs from "./ContactUs";
// import './App.css';
import Footer from "./Footer"




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));

      }

    });
  }, []);



  return (

    <div className="App">

      <Navbar user={user} setUser={setUser} />
      {console.log(user)}

      <main>
        {user ? (
          <div>
                
              <Routes>
                <Route path="*" element={<Home user={user} />} />
              </Routes>
            
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/assessments" element={<Assessments />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<Course />} />
                {/* <Route path="/Footer" element={<Footer/>} /> */}
                
               
                
              </Routes>
            <UserNavbar/>
            <Footer/>
            


          </div>

        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            

            
            
            

            <Route path="/" element={<Home />} />
            
            
          </Routes>

        )}

      </main>

    </div>
  );
}


export default App;