import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
  
  const {courseId}  = useParams();
  console.log('wewe',courseId)

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
      .then((r) => r.json())
      .then((course) => setCourse(course));
  }, []);
 

  

  console.log('rooms number', course.books)

  return (
    <div>
     
    </div>
  
  )
}

export default CourseDetails