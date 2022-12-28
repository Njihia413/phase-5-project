import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import UserNavbar from "./UserNavbar";


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

      <main>
        
        { console.log(user)
         
        }
        { user ? (
          <div>
            
             <Routes>
              <Route path="/" element={<Home user={user} />} />
            </Routes>  
           <UserNavbar/> 
          </div>

        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            <Route path="/" element={<Home />} />
          </Routes>

        )}
      </main>

    </div>
  );
}

export default App;