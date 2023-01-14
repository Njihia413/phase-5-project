import React, { useState } from "react";
import { useNavigate, Link }  from 'react-router-dom'


function Login({ setStoredToken }) {
  // const [ user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }) .then((res) => res.json())
    .then((data) => {
      if (data.jti) {
        localStorage.setItem("token",data.status.data.jti);
        setStoredToken(data.data.status.data.jti);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    });
  
    
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
                          <p>Not a member? <strong><Link className="main-color" to="/signup">Sign Up</Link></strong></p>
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