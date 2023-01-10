import React from "react";
import Home from "./Home";
import { Routes, Route }  from "react-router-dom";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";
import Login from "./Login";
// import './App.css';
import Footer from "./Footer"
import ContactUs from "./ContactUs";

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

      <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
      {console.log(user)}

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