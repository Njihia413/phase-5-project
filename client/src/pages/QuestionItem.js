import React from "react";

function QuestionItem({ question,  onDelete, onAnswer }) {
  const { id, prompt, choices, answer } = question;
  console.log(question)

//   const options = choices.map((choice, index) => (
//     <option key={index} value={index}>
//       {choice}
//     </option>
//   ));

  //delete
  function handleDelete(){
    onDelete(id);
  }


  //Answers
  function handleAnswer(e){
    onAnswer(id, parseInt(e.target.value));
  }

  return (
    <li className="questionli">
      <h4  className="questionheader">Question {id}</h4>
      <h5 className="questionheader">Question: {prompt}</h5>
      <h4 className="questionheader">Choices: {choices}</h4>
      <h4 className="questionheader">Answer: {answer}</h4>
      {/* <label>
        Correct Answer:
        <select onChange={handleAnswer} defaultValue={answer}>{options}</select>
      </label> */}
      <button  className="questionbutton" onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;



