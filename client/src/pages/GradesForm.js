import React from "react";

const GradesForm = () => {
    
//     const form = document.getElementById("studentForm")
// console.log(form);

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     let myFormInputs = {
//   name: event.target.querySelectorAll("#name").value,
//   email: event.target.querySelectorAll("#email").value,
//   mark1: event.target.querySelectorAll("#mark1").value,
//   mark2: event.target.querySelectorAll("#mark2").value,
//   mark3: event.target.querySelectorAll("#mark3").value,
//   total: event.target.querySelectorAll("#total").value,
//   average: event.target.querySelectorAll("#average").value,
//   grade: event.target.querySelectorAll("#grade").value
// //     }
// event.target.reset();
//  console.log(myFormInputs);
//  newRecord(myFormInputs);
// renderRecords(myFormInputs);
//   })

// //  //fetch records

// //  function fetchRecords(){
// //     return fetch(`${apiHost}`)
// //     .then(response => response.json())
// //  }

//  //Render Records to the DOM
//  function renderRecords(record) {
//     const userInfo = document.createElement('tr')
//     userInfo.innerHTML = `<td>${record.name}</td>
//                           <td>${record.email}</td>
//                           <td>${record.mark1}</td>
//                           <td>${record.mark2}</td>
//                           <td>${record.mark3}</td>
//                           <td>${record.total}</td>
//                           <td>${record.average}</td>
//                           <td>${record.grade}</td>
//                           <i class="fa-solid fa-trash-can"></i>`
                
//             //Delete a record
// userInfo.querySelector(".fa-trash-can").addEventListener('click', () => {
//  userInfo.remove();
//  deleteRecord(record.id);
// })
//             document.querySelector('tbody').append(userInfo);  
//  }

//  fetchRecords().then(records => {
//     records.forEach((record => {
//         renderRecords(record)
//     }))
//  })

 //creating a new record
// function newRecord(myFormInputs){
//     fetch(`${apiHost}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(myFormInputs)
//     })
//     .then(response => response.json())
//     .then(record => console.log(record));
// }
// //deleting a record
// function deleteRecord(id){
//     fetch(`${apiHost}/${id}`,{
//         method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     }
//     })
//     .then(response => response.json())
//     .then(record => console.log(record));
    

// }


 
 
  return (
    <div className="right">
      <div className="content">
        <h3 className="logo">Student Results Records</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mark 1</th>
              <th>Mark 2</th>
              <th>Mark 3</th>
              <th>Total</th>
              <th>Average</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesForm;
