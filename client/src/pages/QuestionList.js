import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  //Get
  useEffect(()=>{
    fetch("/api/v1/questions")
    .then(res => res.json())
    .then(questions =>setQuestions(questions));
  },[]);
  console.log(questions)
// Delete
function handleDelete(id){
  fetch(`/api/v1/questions/${id}`,{
    method: "DELETE",
  })
  .then((r)=>r.json())
  .then(()=>{
    const updateQuiz= questions.filter((q)=>q.id !== id);
    setQuestions(updateQuiz);
  });
}

function handleAnswer(id, answer){
  fetch(`/api/v1/questions/${id}`,{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ answer})
})
.then((response) => response.json())

.then(()=>{
  const updateQuiz = questions.map((question) =>{
    if(question.id === updateQuiz.id)
    return updateQuiz;
    return question;
  });
  setQuestions(updateQuiz)
});
}

const questionItems = questions.map((question) =>(
  <QuestionItem
  key={question.id}
  question={question}
  onAnswer={handleAnswer}
  onDelete={handleDelete}
/>) );

  return (
    <section className="questionsection">
      <h1 className="questionheader">Quiz Questions</h1>
      <ul className="questionul">{questionItems}</ul>
    </section>
  );
}

export default QuestionList;