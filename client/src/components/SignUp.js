import React, { useState } from "react";

function SignUp() {
  const [data, setData] = useState({
    role:"",
    username:"",
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
    fetch("/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        passwordconfirmation: data.passwordconfirmation,
        role: data.role
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
      setData({
      username: "",
      email: "",
      password: "",
      passwordconfirmation: "",
      role: ""})
  }

  return (
    <>
    <section className="signup">
      <div className="p-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="outer-signup-card">
              <h2 className="text-center">Welcome To <br></br> Masomo<span>Digi</span></h2>
              <p className="text-center">Create an Account</p>
              <div className="inner-signup-card">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="username" className="required">Username</label>
                          <input 
                              type="text" 
                              id="username"
                              autoComplete="off"
                              value={data.username}
                              className="form-control" 
                              name="username" 
                              placeholder="Username" 
                              onChange={(e) => handleChange(e)}
                              required>
                          </input>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email" className="required">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            autoComplete="off"
                            value={data.email}
                            className="form-control" 
                            name="email" 
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                            required>
                        </input>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="role" className="required">Role</label>
                      <select
                      className="form-select mb-4"
                      name="select"
                      id="role"
                      onChange={(e) => handleChange(e)}
                      value={data.role}>
                        <option value="">Role</option>
                        <option onChange={(e) => handleChange(e)} value="Teacher">
                          Teacher
                        </option>
                        <option onChange={(e) => handleChange(e)} value="Student">
                          Student
                        </option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="password" className="required">Password</label>
                        <input 
                          type="password" 
                          id="password"
                          autoComplete="current-password"
                          value={data.password}
                          className="form-control" 
                          name="password" 
                          placeholder="Password"
                          onChange={(e) => handleChange(e)}
                          required>
                        </input>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="password-confirmation" className="required">Password Confirmation</label>
                        <input 
                          type="password-confirmation" 
                          id="password-confirmation"
                          autoComplete="current-password"
                          value={data.passwordconfirmation}
                          className="form-control" 
                          name="password-confirmation" 
                          placeholder="Password Confirmation"
                          onChange={(e) => handleChange(e)}
                          required>
                        </input>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                          <button type="submit" className="btn btn-login">Create Account</button>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="form-group">
                          <p>Already have an account? <strong><a className="main-color" href="/login">Login</a></strong></p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default SignUp;