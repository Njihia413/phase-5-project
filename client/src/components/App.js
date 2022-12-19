import { Route, Routes } from "react-router-dom";
import SignUp from "./Signup";
import { useEffect } from "react";

function App() {
  

  return (
    <div className="App">
       <Routes>
       <Route path="/signup" element={<SignUp />} />
       </Routes>
    </div>
  );
}

export default App;