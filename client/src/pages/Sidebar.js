import React from 'react'
import '../css/dashboardnav.css';



const Sidebar = () => {
  return (
    <div>
     <div className="dashboard-container">
        <div className="dashboard-navigation">
                <ul className="list">
                <li className="list-item logo">
                 <p className="text">MasomoDigi</p>
                </li>
                   
                    <li className="list-item">
                        <a href="teachercourses">
                            <span>
                            <i className="fa-solid fa-school"></i>
                            </span>
                            <span className="text">Courses</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="teacherassessments">
                            <span>
                            <i className="fa-solid fa-server"></i>
                            </span>
                            <span className="text">Assessment</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="teachergrades">
                            <span>
                            <i className="fa-solid fa-user-group"></i>
                            </span>
                            <span className="text">Grades</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="profile">
                            <span>
                            <i className="fa-solid fa-user"></i>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                     <li className="list-item" id="logout">
                        <a href="/">
                            <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" ></i>
                            </span>
                            <span className="text">Log Out</span>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar