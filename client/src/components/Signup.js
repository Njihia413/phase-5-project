import React, { useState } from "react"
import "./SignUp.css";

function SignUp() {
  const [data, setData] = useState({
    role:"",
    name:"",
    email: "",
    password:"",
    passwordconfirmation: ""
  });
  // const formObject = {}
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata)
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: data.role,
        name: data.name,
        email: data.email,
        password: data.password,
        passwordconfirmation: data.passwordconfirmation,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
      setData({
      role: "",
      name: "",
      email: "",
      password: "",
      passwordconfirmation: "",})
  }

  return (
    <div className="signupform" onSubmit={handleSubmit}>
          <div className="welcome">Welcome To Masomo<span>Digi</span></div>
          <br/>
          <div className="create">create an Account</div>
           <br/>
           <div className= "border">
           <div className="role">
        <label id= "roles">
        Role
        </label>
        <br/>
        <select
          name="select"
          id="role"
          onChange={(e) => handleChange(e)}
          value={data.role}>
            <option value="">Select</option>
          <option onChange={(e) => handleChange(e)} value="Teacher">
            Teacher
          </option>
          <option onChange={(e) => handleChange(e)} value="Student">
            Student
          </option>
        </select>
        </div>
                <div className="user">
                    <label id= "user">Username</label>  <br/>
                    <input
                    onChange={(e) => handleChange(e)}
                    id="name"
                    placeholder=" Username"
                    name="name"
                    type="text"
                    value={data.name}
                    />
                </div>
                <div className="email">
                    <label id= "emails">Email Address</label>  <br/>
                    <input
                    onChange={(e) => handleChange(e)}
                    placeholder="   Email"
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                   />
                </div>

                <div className="password">
                    <label id= "passwords">Password</label>  <br/>
                    <input
                    onChange={(e) => handleChange(e)}
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    />
                </div>
                <div className="password">
                    <label id= "passw">Password Confirmation </label>  <br/>
                    <input
                    onChange={(e) => handleChange(e)}
                    placeholder=" Password Confirmation"
                    id="passwordconfirmation"
                    name="passwordconfirmation"
                    type="password"
                    value={data.passwordconfirmation}
                    />
                </div>
                <button id="next" type="submit" onClick={handleSubmit}>
                    Create Account 
                </button>
                <div id= "already">Already have an account? Login</div>
           </div>
        
    </div>
  );
}

export default SignUp;
