import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../../redux/auth/authActions";

const SignInForm = ({ requestLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeInputs = (e) => {
    switch (e.target.name) {
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
    requestLogin({
      email: email,
      password: password
    });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Sign In</h3>
      <input
        name="email"
        onChange={(e) => changeInputs(e)}
        type="text"
        placeholder="Email"
      ></input>
      <input
        name="password"
        onChange={(e) => changeInputs(e)}
        type="password"
        placeholder="Password"
      ></input>
      <button onClick={(e) => handleSubmit(e)} type="submit">Login</button>
      <a href="#" className="forgot">
        Forgot Password
      </a>
    </form>
  );
};

const mapDispatchToProps = {
  requestLogin,
};

export default connect(null, mapDispatchToProps)(SignInForm);
