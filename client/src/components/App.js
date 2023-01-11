import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";




function App() {

  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      




    </div>
  );
}

export default App;  


// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }

// export default App;