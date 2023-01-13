// import React from 'react'
import ReviewForm from './ReviewForm'

// function Reviews() {
//   return (
//     <div className='review'>
//       <h1>Reviews</h1>
//       <ReviewForm/>
//     </div>

      
    
//   )
// }

// export default Reviews
import React, { Component } from 'react'
// import Review from './Review'
// import ReviewForm from './ReviewForm'

export default class Reviews extends Component {

  state = {
    reviews: [],
}

componentDidMount(){
fetch('http://localhost:3000/API/v1/reviews')
.then(res => res.json())
.then(reviews => this.setState({ reviews }))
}
            
  addReview = (review) => {
      fetch('http://localhost:3000/API/v1/reviews',{
          method: "POST",
          headers: {
              "Content-Type" : "application/json",
              Accept: "application/json",
              Authorization: `bearer ${localStorage.token}`
          },
          body: JSON.stringify({ review: review }
          ),
      })
      .then(res => res.json())
      .then(( json => {
          this.setState(prevState => ({
              reviews: [...prevState.reviews, json ]
             }))
      }))
  }

//   handleShowForm = () => {
//     this.setState({edit: false})
// }


  render() {
    return (
      <div className="review-grid">
               <ReviewForm addReview={this.addReview} review={this.handleSubmit} />
        <h1 className="review-content">Reviews!</h1>
         <ul className="review-cards">
      {
        this.state.reviews.map(review => <review key={review.id} review={review}/>)
      }  
    </ul>
      </div>
    )
  }
}
