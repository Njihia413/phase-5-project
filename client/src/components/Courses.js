import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useCart } from "react-use-cart";
// import { useNavigate}  from 'react-router-dom'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";


function Courses() {
// const navigate = useNavigate()
  const [courses, setCourses] = useState([]);
  const { addItem } = useCart();
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
                <div className="courses">
                  <CardGroup style={{ width: "48rem" }} key={course.id} >
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
                      {/* enroll now */}
                      <Button
                        onClick = {() => addItem(course)}
                        style={{
                          width: "13rem",
                          height: "2rem",
                          fontSize: "16px",
                          fontWeight: "600",
                          backgroundColor: "rgb(184,162,125)",
                        }}
                        variant="primary"
                      >
                        Enrol Now
                      </Button>
                    </Card.Body>
                  </CardGroup>
                </div>
                    )
                            })
                          }
                        </div>
                        </div>
                      </div>  
                
                
              
    {/* //           return (
    //             <div>
    //               <div className='col-md-4' key={course.id} >
    //                 <div className="card text" key={course.id}>
    //                 <img src={course.image_url} className="card-img-top" alt="..." />
    //                   <div className="card-body" key={course.id}>
    //                     <h3 className="card-title">{course.name}</h3>
                       
    //                   </div>
        
                      
                      
    //                    <Link className='btn btn-success'to={`/courses/${course.id}`}> More Info</Link>
                       
    //                 </div>
    //               </div>
    //             </div>
    //           )
    //         })
    //       }
    //     </div> */}
    //     </div>
    //   </div>  

    // </div>
  )
}

export default Courses;




