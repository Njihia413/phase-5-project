import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import { NavLink} from 'react-router-dom'

function Courses() {
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
  <section className='courses-page'>
    <div className='bg-courses'>
        <Navbar />
        <div className="row">
          <div className="col">
            <div className="intro">
              <h1>
                Checkout our courses <br></br> curated for your E-<br></br>
                Learning
              </h1>
            </div>
          </div>
        </div>
        <div className="course-search-container">
        <form>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for Courses iewebdevelopment"
          ></input>
        </form>
      </div>
      <div class="courses-filter-sort-container">
        <div class="courses-filter-sort-button">
          <button type="button">
            Filter <i class="fa-solid fa-caret-down"></i>
          </button>
          <button type="button">
            Sort By <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
       </div> 
       <div className="courses-text-container">
        <div className="courses-text-block">
          <p>
            <strong>All Courses</strong>
          </p>
          <p>Web Development(2908)</p>
          <p>Designs(11293)</p>
          <p>Photography(2230)</p>
          <p>3d Artist(19828)</p>
          <p>Motion Graphics(8223)</p>
          <p>Software Engineer(1001)</p>
          <p>UI/UX Roadmap(734)</p>
          <p>Sound & Music(1223)</p>
          <p>Digital Marketing(382)</p>
        </div>
      </div>
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
                        <h3 className="card-title">{course.name}</h3>
                       
                      </div>
                       <NavLink className='btn btn-success'to={`/courses/${course.id}`}> More Info</NavLink>
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

export default Courses