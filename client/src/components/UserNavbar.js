import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaThList
} from "react-icons/fa";


function UserNavbar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "*",
            name: "Home",
            icon: <FaTh />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <FaUserAlt />
        },
        {
            path: "/assessments",
            name: "Assessments",
            icon: <FaRegChartBar />
        },
        {
            path: "/courses",
            name: "Courses",
            icon: <FaThList />
        },
        {
            path: "/reviews",
            name: "Reviews",
            icon: <FaCommentAlt />
        }
        
       

    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
             <main>{children}</main> 
        </div>
    );
};

export default UserNavbar