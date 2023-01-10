import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function SignUp() {
  const [data, setData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    passwordconfirmation: "",
  });
  const navigate = useNavigate();
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
      passwordconfirmation: "",
    });

    navigate(`/dashboard`);
  }

  return (
    <Container className="signupform">
       <Col className="welcome md">
        Welcome To Masomo<span>Digi</span>
      </Col>
      <br />
      <Col className="create md">create an Account</Col>
      <br />
      <Form>
        
        <Form.Group>
        <Form.Label id="roles">Role</Form.Label>
            <br />
            <select
              name="select"
              id="role"
              onChange={(e) => handleChange(e)}
              value={data.role}
            >
              <option value="">Select</option>
              <option onChange={(e) => handleChange(e)} value="Teacher">
                Teacher
              </option>
              <option onChange={(e) => handleChange(e)} value="Student">
                Student
              </option>
            </select>
        </Form.Group>
        <Col className="md">
          <Form.Group controlId="formUser">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="name"
              placeholder=" Username"
              name="name"
              type="user"
              value={data.name}
            />
          </Form.Group>
        </Col>
        <Col className="md">
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              placeholder="   Email"
              id="email"
              name="email"
              type="email"
              value={data.email}
            />
          </Form.Group>
        </Col>
        <Col className="md">
          <Form.Group controlId="formEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={data.password}
            />
          </Form.Group>
        </Col>
        <Col className="md">
          <Form.Group controlId="formEmail">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              placeholder=" Password Confirmation"
              id="passwordconfirmation"
              name="passwordconfirmation"
              type="password"
              value={data.passwordconfirmation}
            />
          </Form.Group>
        </Col>
        <Col className="md">
          <Button type="submit" onClick={handleSubmit}> Create Account</Button>
        </Col>
        <span id="signup=section"> Already have an account? </span>
          <Link id="link" to={"/login"}>
            Login
          </Link>
      </Form>
      
    </Container>
  );
}

export default SignUp;

{
  /* <div className="signupform" onSubmit={handleSubmit}>
      <div className="welcome">
        Welcome To Masomo<span>Digi</span>
      </div>
      <br />
      <div className="create">create an Account</div>
      <br />
      <div className="border">
        <col>
          <div className="role">
            <label id="roles">Role</label>
            <br />
            <select
              name="select"
              id="role"
              onChange={(e) => handleChange(e)}
              value={data.role}
            >
              <option value="">Select</option>
              <option onChange={(e) => handleChange(e)} value="Teacher">
                Teacher
              </option>
              <option onChange={(e) => handleChange(e)} value="Student">
                Student
              </option>
            </select>
          </div>
        </col>
        <col>
        <div className="user">
          <label id="user">Username</label> <br />
          <input
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder=" Username"
            name="name"
            type="text"
            value={data.name}
          />
        </div>
        </col>
        <col>
        <div className="email">
          <label id="emails">Email Address</label> <br />
          <input
            onChange={(e) => handleChange(e)}
            placeholder="   Email"
            id="email"
            name="email"
            type="email"
            value={data.email}
          />
        </div>
        </col>
        
        <col>
        <div className="password">
          <label id="passwords">Password</label> <br />
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={data.password}
          />
        </div>
        </col>
        <col>
        <div className="password">
          <label id="passw">Password Confirmation </label> <br />
          <input
            onChange={(e) => handleChange(e)}
            placeholder=" Password Confirmation"
            id="passwordconfirmation"
            name="passwordconfirmation"
            type="password"
            value={data.passwordconfirmation}
          />
        </div>
        </col>
        <button id="next" type="submit" onClick={handleSubmit}>
          Create Account
        </button>
        <div id="already">
          <span id="signup=section"> Already have an account? </span>
          <Link id="link" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div> */
}
