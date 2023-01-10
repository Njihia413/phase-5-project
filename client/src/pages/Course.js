import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Course() {
    const [params] = useParams()
    const [course, setCourse] = useState([]);

   
    useEffect(() => {
        fetch(`/courses/${params}`)
          .then((r) => r.json())
          .then((course) => setCourse(course));
      }, [params]);
    
     
    
    return (
        <div className='course'>
        {/* <h1>Course</h1>
       
            <></>
        <h2>{course.name}</h2>
        {/* {course.videos.map((video) => {
             return(
                <>
                <h3>{video.name}</h3>
                <iframe src={video.video_url}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </>

             )
               
           })
          
        } */}

<div>
     
      {Object.keys(course.videos).map(key => {
        return (
          <div key={key}>
            <h2>
              {key}: {course.videos[key]}
            </h2>

            <hr />
          </div>
        );
      })}
    </div>
 
        
          

        


        


    </div>
    )
}

export default Course