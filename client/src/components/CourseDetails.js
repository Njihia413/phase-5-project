import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
  const {courseId}  = useParams();
  console.log('wewe',courseId)

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/courses/${courseId}`)
      .then((r) => r.json())
      .then((course) => setCourse(course));
  }, [courseId]);

  console.log('rooms number', course)

  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails