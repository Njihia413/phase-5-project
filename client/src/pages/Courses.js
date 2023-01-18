import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const request = fetch("/api/v1/courses");
      const response = await request;
      const parsed = await response.json();
      setCourses(parsed);
    }

    getCourses();
  }, []);

  if (courses === undefined) {
    return null;
  }
  console.log(courses);

  return (
  <section className='course-page'>
    <div className='bg-courses'>
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
      </div>
      <div className='course'>
           <h3>Courses</h3>
       <div key={courses.id}>
        <div key={courses.id}>
        <div class="watch" >
          {
            courses.map((course) => {
              return (
                <div className="watches">
                <CardGroup style={{ width: "25rem" , height: "100%"}} key={course.id}>
                  <Card.Img variant="top" src={course.image_url} alt={course.name} />{" "}
                  <br />
                  <br />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontWeight: "600",
                        color: "whitesmoke",
                        fontSize: "20px",
                      }}
                    >
                      {course.name}
                    </Card.Title>
                  </Card.Body>
                </CardGroup>
              </div>
                
                // <div>
                //   <div   className="col-4 p-2" >
                //     <div key={course.id}>
                //     <img src={course.image_url} alt="..." />
                //     </div>
                //       <div key={course.id}>
                //       <Link  to={`/courses/${course.id}`}>
                //         <h3>{course.name}</h3>
                //       </Link>
                //       </div>
                  
                    
                    
                //   </div>
                   
                // </div>
              )
            })
          }
        </div>
        </div>
      </div>  

    </div>
    </section>
  );
}

export default Courses;
