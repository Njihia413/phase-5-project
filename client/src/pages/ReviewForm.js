import { useState } from "react";


const initialState = {
    Title: "",
    Author: "",
    Review: "",
    rRating: "",
  };

function ReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("./reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReview) => {
        setFormData(initialState);
        onAddReview(newReview);
      });
  }

  return (
    <div className="review">
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        {/* <label htmlFor="image">Image URL: </label> */}
        {/* <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        /> */}
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          id="note"
          value={formData.note}
          onChange={handleChange}
        />
        <label htmlFor="review">Review: </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;