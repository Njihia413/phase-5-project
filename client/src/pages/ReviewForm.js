import React from 'react'



class ReviewForm extends React.Component {
 
    state = {
        reviewed_book: '',
        rating: '',
        user_username: '',
    }
    
handleReviewedGame = (event) => {
    this.setState ({
        reviewed_book: event.target.value
     })
}

handleRating = (event) => {
    this.setState ({
        rating: event.target.value
     })
}

handleUser = (event) => {
    this.setState ({
        user_username: event.target.value
    })
}

handleForm = (e) => {
    e.preventDefault()
    // console.log(e)
    const review = {
    reviewed_book: this.state.reviewed_book,
    rating: this.state.rating,
    }
    
   this.props.addReview(review)
    }
render() {
    return (
    <div className="form-container">
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <div>
                    <label>Review</label>
                    <br></br>
                    <textarea type="text" placeholder="Drop Your Review" rows={10} cols={50} value={this.state.reviewed_book} onChange={this.handleReviewedBook}  className="form"/>
                    <div>
                    <label>Stars</label>
                    <br></br>
                    <input type="number"  max="5" min="0" value={this.state.rating} onChange={this.handleRating} />
                    </div>
                </div>
                <button type="submit" className="sub-review">Reviews</button>
            </form> 
        
    </div>
        )
    }
}
export default ReviewForm;