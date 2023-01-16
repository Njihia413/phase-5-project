import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { useNavigate}  from 'react-router-dom'


function Courses() {
// const navigate = useNavigate()
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
                        <h3 className="card-title">{course.name}</h3>
                       
                      </div>
                      {/* <button onClick={() => CourseDetails(course)}>More info</button> */}
                      
                      
                       <Link className='btn btn-success'to={`/courses/${course.id}`}> More Info</Link>
                       
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
  )
}

export default Courses;