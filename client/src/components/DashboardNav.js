import React from "react";
import { NavLink } from "react-router-dom";

function DashboardNav ({ user, setUser }) {
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }

  return (
    <div className="header">
    <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">Masomo<span>Digi</span></a>

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
                          {/* <li className="nav-item">
                              <NavLink to="/Dashboard"  className="nav-link">Dashboard</NavLink>
                          </li> */}
                      </ul>
                      {/* <button className="btn btn-primary" id="nav-btn">Log In</button> */}
                      <div>
                      {/* {user ? (
                        <button className="btn btn-primary"  id="nav-btn" onClick={handleLogoutClick}>Logout</button>
                      ) : ( */}
                        <div>
                          {/* <NavLink to="/login" className="btn btn-primary" id="nav-btn">Login</NavLink> */}
                        </div>
                      {/* )} */}
                    </div>
              </div>
          </div>
      </nav>
      </div>
  );
}
export default DashboardNav;