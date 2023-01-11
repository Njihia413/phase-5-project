import React, { useEffect, useState } from 'react'


function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const request = fetch('/books');
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
       <div className='container my-5 py-5' key={books.id}>
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
      </div>  

    </div>
  )
}

export default Books