import React, { useState } from "react";
import { connect } from "react-redux";
import { requestRegister } from "../../redux/auth/authActions";

const SignUpForm = ({ requestRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeInputs = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestRegister({ name: name, email: email, password: password });
    console.log("btn");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Sign Up</h3>
      <input
        name="name"
        onChange={(e) => changeInputs(e)}
        type="text"
        placeholder="Username"
      ></input>
      <input
        name="email"
        onChange={(e) => changeInputs(e)}
        type="text"
        placeholder="Email Address"
      ></input>
      <input
        name="password"
        onChange={(e) => changeInputs(e)}
        type="password"
        placeholder="Password"
      ></input>
      <input type="password" placeholder="Confirm Password"></input>
      <button type="submit" value="Register">
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  requestRegister,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
