import React, { useState, useEffect } from "react";
import "./register-login.scss";
import { useLocation, Link } from "react-router-dom";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const RegisterLogin = () => {
  useEffect(() => {
    if (location.pathname === "/register") {
      changeFormActive(true);
    } else {
      changeFormActive(false);
    }
  }, []);

  const [formActive, changeFormActive] = useState(false);
  const location = useLocation();

  const handleBtnClick = () => {
    changeFormActive(!formActive);
  };

  return (
    <section className={`body ${formActive ? "active" : ""}`}>
      <div className="register__container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <Link to={"/login"} onClick={handleBtnClick} className="signinBtn">
              Sign in
            </Link>
          </div>
          <div className="box signup">
            <h2>Don`t Have an Account ?</h2>
            <Link
              to={"/register"}
              onClick={handleBtnClick}
              className="signupBtn"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className={`formBx ${formActive ? "active" : ""}`}>
          <div className="form signinForm">
            <SignInForm />
          </div>

          <div className="form signupForm">
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;
