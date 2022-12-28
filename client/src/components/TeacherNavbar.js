import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

function TeacherNavbar({children}) {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/profile",
            name:"Profile",
            
        },
        {
            path:"/courses",
            name:"Courses",
          
        },
        {
            path:"/assessments",
            name:"Assessment",
           
        },
        {
            path:"/reviews",
            name:"Reviews",
           
        }
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <botton onClick={toggle}>Click</botton>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default TeacherNavbar