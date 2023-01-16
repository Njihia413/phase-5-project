import React, { useEffect, useState } from 'react'
import cup from "../assets/IMG-3217.jpg";
import cap from "../assets/IMG-3225.jpg";
import cep from "../assets/IMG-3222.jpg";
import cop from "../assets/IMG-3219.jpg";
import coup from "../assets/IMG-3224.jpg";
import bup from "../assets/IMG-3221.jpg";


function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const request = fetch('/');
      const response = await request;
      const parsed = await response.json();
      setBooks(parsed);
    }

    getBooks();
  }, []);

  if (books === undefined) {
    return null;
  }
   console.log(books)

  

  return (
  
    <div className='books'>
          <h5 className="text-center mt-1"><b>Reading Materials</b></h5>
    
       {/* <div className='container my-5 py-5' key={books.id}>
        <div className='row d-flex justify-content-center' key={books.id}>
        <div class="card" >
          {
            books.map((book) => {
              return (
                <div>
                  <div className='col-md-4' key={book.id} >
                    <div className="card text" key={book.id}>
                    <img src={book.image_url} className="card-img-top" alt="..." />
                      <div className="card-body" key={book.id}>
                        <h3 className="card-title">{book.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>   */}
      <div className="container">
       <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src={cup} alt="" className="card-img-n"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cap} alt="" className="card-img-n"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cep} alt="" className="card-img-n"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={cop} alt="" className="card-img-n"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={coup} alt="" className="card-img-n"></img>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={bup} alt="" className="card-img-n"></img>
        </div>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Books