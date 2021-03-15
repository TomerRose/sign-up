import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUserName } from "../store/index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
  };
};

const SignIn = ({ setUserName }) => {
  const [user, setUser] = useState({});
  let history = useHistory();

  const submitNewUser = (e) => {
    e.preventDefault();

    let newUser = user;
    if (
      !user.name ||
      !user.email ||
      !user.email ||
      !user.phoneNum ||
      !user.bDay ||
      !user.favAnimal
    ) {
      alert("please fill in all the fields");
      return;
    }
    fetch("http://localhost:3010/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((newUser) => {
        console.log("Success:", newUser);
        console.log("form submited");
        setUserName(user.name);
        history.push("/users");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const inputTextHandler = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <h2>Login</h2>
      <br />
      <Form onSubmit={submitNewUser}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={inputTextHandler}
          required
        ></Form.Control>
        <br />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={inputTextHandler}
          required
        ></Form.Control>
        <br />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNum"
          placeholder="Enter Phone Number"
          onChange={inputTextHandler}
          required
        ></Form.Control>
        <br />
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          name="bDay"
          placeholder="Enter Birthday"
          max="2020-12-31"
          onChange={inputTextHandler}
          required
        ></Form.Control>
        <br />
        <Form.Label>Favorite Animal</Form.Label>
        <Form.Control
          type="text"
          name="favAnimal"
          placeholder="Enter Favorite Animal"
          onChange={inputTextHandler}
          required
        ></Form.Control>
        <br />
        <div className="wrapper">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
