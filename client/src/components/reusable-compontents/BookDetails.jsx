import React from 'react'
import "../../styles/BookDetails.css"
function BookDetails({props}) {
const [courseDetails, setCourseDetails] = React.useState(false);

  const handleCourseDetails = (e) => {
    setCourseDetails((current) => !current)
  }
  return (<div className="img-btn">
      {courseDetails && (
      
<div className='book-details-info'>
        <div className="close-button">
            <div className="empty"></div>
            <button onClick={handleCourseDetails}>close</button>
        </div>
    <div className="top-nav-back-btn">
<div className="top-nav-bar-section">
<div className="back-to-courses">
    </div>
        <div className="book-img">
            <img src={props.image_url} alt="" />
        </div>
</div>
    <div className="back-to-courses description-right">
        <h1>{props.title}</h1>
        <div className="title-info">
            <h3>Title:</h3><p>{props.title}</p>
        </div>
        <div className="title-info">
            <h3>category:</h3><p>{props.category}</p>
        </div>
        <div className="title-info">
            <h3>Author</h3><p>{props.author}</p>
        </div>
        <div className="title-info">
            <h3>Description</h3>
        </div>
        <p>{props.description}</p>
        <div className="button-btn" >
            <button className="btn">
                Download
            </button>
            <button className="btn">
                Review
            </button>
        </div>
    </div>
</div>
</div>
      )}
    <img src={props.image_url}  onClick={handleCourseDetails} className="render-img-book"/>

  </div>
  )
}

export default BookDetails