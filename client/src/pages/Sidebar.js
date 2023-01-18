import React from 'react'
import {Link} from 'react-router-dom'
import '../css/dashboardnav.css';



const Sidebar = () => {
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
                     <li className="list-item">
                        <Link to="/profile">
                            <span>
                            <i className="fa-solid fa-user"></i>
                            </span>
                            <span className="text">Profile</span>
                        </Link>
                    </li>
                     <li className="list-item" id="logout">
                        <Link to="/">
                            <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" ></i>
                            </span>
                            <span className="text">Log Out</span>
                        </Link>
                    </li>
                </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar