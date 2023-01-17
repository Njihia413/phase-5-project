import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Enrolnow () {
    function logout() {
        fetch("/users/sign_out", {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((json) => Promise.reject(json));
            }
          })
          .then((json) => {
            console.dir(json);
          })
          .catch((err) => console.error(err));
        }

  return (
    <div className="all">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <a className="navbar-brand-1" href="/">Masomo<span>Digi</span></a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>      
              </button>
              
              <div className="collapse navbar-collapse" id="navbarContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                      <ul className="navbar-nav nav-center">
                          <li className="nav-item">
                              <NavLink to="/"  className="nav-link">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/courses"  className="nav-link">Courses</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/about"  className="nav-link">About Us</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/contact"  className="nav-link">Contact Us</NavLink>
                          </li>
                           
                      </ul>
                      <button className="btn"  id="nav-btn" onClick={logout}>Logout</button> 
                      <div>
                        <div>
                          <NavLink to="/login" className="btn" id="nav-btn">Login</NavLink>
                        </div>
                      
                    </div>
              </div>
          </div>
      </nav>
      <Footer/>
    </div>
    
  );
}export default Enrolnow