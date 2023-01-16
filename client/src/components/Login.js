import React, { useState } from "react";
import { useNavigate }  from 'react-router-dom'
import { NavLink }  from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  function setToken(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
  }
console.log(email)
  function getToken() {
    let now = new Date(Date.now()).getTime();
    let thirtyMinutes = 1000 * 60 * 30;
    let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
  }
  
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user:{ email, password },}),
    }) .then((res) => {
      if (res.ok) {
        setToken(res.headers.get("Authorization"));
        return res.json();
      } else {
        return res.text().then((text) => Promise.reject(text));
      }
    })
    .then((json) => console.dir(json))
    .catch((err) => console.error(err));


    // Then wait 30 minutes and do this:

// fetch("/private/test", {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: getToken(),
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else if (res.status ==="401") {
//       return res.text().then((text) => Promise.reject(text));
//     }
//   })
//   .then((json) => console.dir(json))
//   .catch((err) => console.error(err));
  
    navigate(`/courses`)
    
  }
  
  return (
    <div>
    <section className="top-header">
      <div className="row text-center">
        <div className="col-md-12">
            <h3 className="login-heading">Login</h3>
        </div>
      </div>
    </section>

    <section className="login">
      <div className="auth">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="login-card">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email" className="required">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            autoComplete="off"
                            value={email}
                            className="form-control" 
                            name="email" 
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required>
                        </input>
                      </div>
                    </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="password" className="required">Password</label>
                      <input 
                          type="password" 
                          id="password"
                          autoComplete="current-password"
                          value={password}
                          className="form-control" 
                          name="password" 
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required>
                      </input>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                          <button type="submit" className="btn btn-login">Login</button>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="form-group">
                          <p>Not a member? <strong><NavLink className="main-color" to="/signup">Sign Up</NavLink></strong></p>
                      </div>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;