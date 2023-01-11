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
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/about" element={<About/>} />
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


// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }

// export default App;