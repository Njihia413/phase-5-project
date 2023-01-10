import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";

function SignUp ({setUser, setOnLogin, navigate}) {
  // start of sign up functionality
  const [signupData, setSignupData] = useState({
    username: "",
    email_address: "",
    password: "",
    password_confirmation: "",
  });

  const [signupError, setSignupError] = useState([]);
  const [signupLoading, setSignupLoading] = useState(false);

  function handleSignupChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData({ ...signupData, [name]: value });
  }

  async function handleSubmitSignupDetails(event) {
    event.preventDefault();
    setSignupLoading(true);
    const response = await fetch("/signup", {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });

    const userData = await response.json();
    if (response.ok) {
      setUser(userData);
      setOnLogin(true);
      setSignupError([]);
      setSignupLoading(false);
      navigate("/");
      setSignupData({
        username: "",
        password: "",
        image_url: "",
        password_confirmation: "",
      });
    } else {
      setSignupError(userData.errors);
      setSignupLoading(false);
    }
  }
  return (
    <div className="signup-div">
      <form className="signup-form" onSubmit={handleSubmitSignupDetails}>
        <h1><span>T</span>he Orchid</h1> 
        <div className="css">
          <label> Username </label> <br />
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="signup-input"
          value={signupData.username}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Username"))}!!!
          </p>
        ) : null}
        <br />
        <label htmlFor="password"> Password </label> <br />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("Password"))}!!!
          </p>
        ) : null}
        <br />
        <label type="password"> Password Confirmation </label> <br />
        <input
          type="password"
          name="password_confirmation"
          autoComplete="current-password"
          className="signup-input"
          value={signupData.password_confirmation}
          onChange={handleSignupChange}
        />
        {signupError.length > 0 ? (
          <p style={{ color: "red", fontSize: "15px" }}>
            {signupError.find((error) => error.includes("confirmation"))}!!!
          </p>
        ) : null}
        <br />
        <label type="imageUrl"> Profile Image </label> <br />
        <input
          type="text"
          id="imageUrl"
          className="signup-input"
          name="image_url"
          value={signupData.image_url}
          onChange={handleSignupChange}
        /> <br/>
        <label>Bio</label>
        <textarea
          rows="3"
          autoComplete="off"
          className="signup-input"
          type="text"
          onChange={handleSignupChange}
        />
        <br />
        <button type="submit" id="signup-btn">
          {signupLoading ? "Loading..." : "Sign Up"}
        </button>
        <Link id="link" to={"/login"}>
          <span id="login-section"> Have an account already?  Login </span>
        </Link></div>
        
      </form>
    </div>
  );
}

export default SignUp;
// import { useNavigate }  from 'react-router-dom'

// function Signup({setUser}) {
//   const navigate = useNavigate()
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         password_confirmation: passwordConfirmation,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//     navigate('/')
//   }
//   return (
//     <div>
//           <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//        <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="off"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="off"
//         />
//         <label htmlFor="password">Password Confirmation</label>
//         <input
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="off"
//         />
//         <button type="submit">Sign Up</button>
       
//       </form>
//     </div>



//     </div>
//   )
// }

