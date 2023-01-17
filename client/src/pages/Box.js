import React, { useState } from 'react'

const Box = () => {

    const[num1, setNum1] = useState();
    const[num2, setNum2] = useState();
    const[num3, setNum3] = useState();
    const[tot, setTot] = useState();
    const[average, setAverage] = useState();
    const[grade, setGrade] = useState();

    function handleClick() {
        if(num1 && num2 && num3){
            const total = Number(num1) + Number(num2) + Number(num3);
            setTot(total);
            const average = Number(total/3);
            setAverage(average);
            if(average > 70)
            {
                setGrade("A");
            }
            else if(average > 50)
            {
                setGrade("B");
            }
            else
            {
                setGrade("F");
            }
        }
    }

  return (
    <div className='box'>
        <h1>Grades</h1>
           <div className='mb-3'>
                <label for="exampleName" class="form-label">Name</label>
                <input type="text"  className='form-control' ></input>
            </div>

            <div className='mb-3'>
                <label for="exampleEmail" class="form-label">Email</label>
                <input type="email"  className='form-control' ></input>
            </div>
        <div className='mb-3'>
        <label for="exampleMark1" class="form-label">Mark 1</label>
        <input type="text" name="num1" className='form-control' onChange={(event) =>
             {
                setNum1(event.target.value);
             }}>
             </input>
             </div>

             <div className='mb-3'>
             <label for="exampleMark2" class="form-label">Mark 2</label>
             <input type="text"  className='form-control' onChange={(event) =>
             {
                setNum2(event.target.value);
             }}>
             </input>
             </div>

             <div className='mb-3'>
             <label for="exampleMark3" class="form-label">Mark 3</label>
             <input type="text"  className='form-control' onChange={(event) =>
             {
                setNum3(event.target.value);
             }}>
             </input>
             </div>

             <div className='mb-3'>
             <label for="exampleTotal" class="form-label">Total</label>
             <input type="text"  className='form-control' value={ tot }></input>
             </div>

             <div className='mb-3'>
             <label for="exampleAverage" class="form-label">Average</label>
             <input type="text"  className='form-control' value={ average }></input>
             </div>

             <div className='mb-3'>
             <label for="exampleGrade" class="form-label">Grade</label>
             <input type="text"  className='form-control' value={ grade }></input>
             </div>
             <button onClick={handleClick} className="btn btn-primary">Click</button>
             <button onClick={handleClick} className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Box
