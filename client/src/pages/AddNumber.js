// import React, { useState } from 'react'

// const AddNumber = () => {

//     const[num1, setNum1] = useState();
//     const[num2, setNum2] = useState();
//     const[tot, setTot] = useState();

//     function handleClick()
//     {
//         setTot(Number(num1) + Number(num2));
//     }

//   return (
//     <div>
//         <h1>Grades</h1>
//         <label>Mark 1</label>
//         <input type="text" name="num1" className='form-control' onChange={(event) =>
//              {
//                 setNum1(event.target.value);
//              }}>
//              </input>
//              <label>Mark 2</label>
//              <input type="text"  className='form-control' onChange={(event) =>
//              {
//                 setNum2(event.target.value);
//              }}>
//              </input>
//              <label>Total</label>
//              <input type="text"  className='form-control' value={ tot }></input>

//              <button onClick={handleClick} className="btn btn-warning mt-4">Click Me</button>
             
      
//     </div>
//   )
// }

// export default AddNumber;