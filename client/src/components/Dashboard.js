
import React, { useEffect, useState } from 'react'
import DashboardNav from './DashboardNav'
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const request = fetch('/api/v1/courses');
      const response = await request;
      const parsed = await response.json();
      setCourses(parsed);
    }

    getCourses();
  }, []);

  if (courses === undefined) {
    return null;
  }
   console.log(courses)

  

  return (
    <section className="dashboard">
      <DashboardNav />
      <h3 className="dash-text-center mt-4">Courses</h3>
        
       <div className="dashboard-text">
        <strong>All Courses</strong>
        <strong>My Courses</strong>
       </div>
      <div className="dash-search-container">
         <form>
           <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
           <input
            type="text"
            placeholder="Search for Courses iewebdevelopment">

            </input>
        </form>
      </div>
      <div class="filter-sort-container">
        <div class="filter-sort-button">
          <button type="button">
            Filter <i class="fa-solid fa-caret-down"></i>
          </button>
          <button type="button">
            Sort By <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
  
    <div className='courses'>
           <h2> Courses</h2>
       <div className='container my-5 py-5' key={courses.id}>
        <div className='row d-flex justify-content-center' key={courses.id}>
        <div class="card" >
          {
            courses.map((course) => {
              return (
                
                <div>
                  
                  <div className='col-md-4' key={course.id} >
                    <div className="card text" key={course.id}>
                    <img src={course.image_url} className="card-img-top" alt="..." />
                   
                      <div className="card-body" key={course.id}>
                      <Link  to={`/courses/${course.id}`}>
                        <h3 className="card-title">{course.name}</h3>
                      </Link>
                      </div>
                  
                    </div>
                    
                  </div>
                   
                </div>
              )
            })
          }
        </div>
        </div>
      </div>  

    </div>
</section> 
  )
}
export default Dashboard;