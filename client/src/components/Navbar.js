import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
      <div className="logo-text">
                            <span className="logo-text-1">Masomo</span>
                            <span className="logo-text-2">Digi</span>
                        </div>
       
        
        
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
           <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </>
        )}
      </div>
   
    </header>
  );
}
export default Navbar;