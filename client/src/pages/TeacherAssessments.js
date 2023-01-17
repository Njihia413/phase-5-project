import React,{useEffect,useState} from 'react'

function TeacherAssessments() {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
      async function getAssessments() {
          const request = fetch("/api/v1/assessments");
          const response = await request;
          const parsed = await response.json();
          setAssessments(parsed);
      }

      getAssessments();
  }, []);

  if (assessments === undefined) {
      return null;
  }
  console.log(assessments);
  

  return (
    <div>TeacherAssessments</div>
  )
}

export default TeacherAssessments