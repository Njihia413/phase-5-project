import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../css/dashboardnav.css';



const Sidebar = () => {
     const navigate = useNavigate()
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
          navigate ('/login')
        }
  return (
    <div>
     <div className="dashboard-container">
        <div className="dashboard-navigation">
                <ul className="list">
                <li className="list-item logo">
                 {/* <h3 className="text">MasomoDigi</h3> */}
                </li>
                   
                    <li className="list-item">
                        < Link to="/teachercourses">
                            <span>
                            <i className="fa-solid fa-school"></i>
                            </span>
                            <span className="text">Courses</span>
                        </Link>
                    </li>
                     <li className="list-item">
                        <Link to="/teacherassessments">
                            <span>
                            <i className="fa-solid fa-server"></i>
                            </span>
                            <span className="text">Assessment</span>
                        </Link>
                    </li>
                     <li className="list-item">
                        <Link to="/teachergrades">
                            <span>
                            <i className="fa-solid fa-user-group"></i>
                            </span>
                            <span className="text">Grades</span>
                        </Link>
                    </li>
                    
                     <li className="list-item" id="logout">
                        <Link to="/">
                            <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" ></i>
                            </span>
                            <button className='btn btn-dark' id="nav-btn" onClick={logout}>Log Out</button> 
                        </Link>
                    </li>
                </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar