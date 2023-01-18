import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    choices: [
      // formData.choice1,
      // formData.choice2,
      // formData.choice3,
      // formData.choice4,
    ],
    answer: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt : formData.prompt,
        choices: [
          formData.choice1,
          formData.choice2,
          formData.choice3,
          formData.choice4,
        ],
        answer: parseInt(formData.answer),
      }),
    });
  }

  return (
    <section  className="questionsection">
      <h1 className="questionheader">New Question</h1>
      <form  className="questionform" onSubmit={handleSubmit}>
        <label className="questionlabel">
          Question:
          <input 
            className="questioninput"
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label className="questionlabel">
          Answer 1:
          <input 
            className="questioninput"
            type="text"
            name="answer1"
            value={formData.choice1}
            onChange={handleChange}
          />
        </label>
        <label className="questionlabel">
          Answer 2:
          <input
            className="questioninput"
            type="text"
            name="answer2"
            value={formData.choice2}
            onChange={handleChange}
          />
        </label>
        <label className="questionlabel">
          Answer 3:
          <input
            className="questioninput"
            type="text"
            name="answer3"
            value={formData.choice3}
            onChange={handleChange}
          />
        </label>
        <label className="questionlabel">
          Answer 4:
          <input
            className="questioninput"
            type="text"
            name="answer4"
            value={formData.choice4}
            onChange={handleChange}
          />
        </label>
        <label className="questionlabel">
          Correct Answer:
          <select 
            className="questioninput"
            name="correctIndex"
            value={formData.answer}
            onChange={handleChange}
          >
            <option value="0">{formData.choice1}</option>
            <option value="1">{formData.choice2}</option>
            <option value="2">{formData.choice3}</option>
            <option value="3">{formData.choice4}</option>
          </select>
        </label>
        <button className="questionbutton" type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
