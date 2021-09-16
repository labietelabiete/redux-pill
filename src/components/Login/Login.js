import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";

import { API, LOGIN } from "../../constants/routes";

import { logIn } from "../../redux/login/actions";

import { DASHBOARD } from "../../constants/routes";

import "./Login.scss";

const axios = require("axios");

export default function Login() {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const logInRequest = (email, password) => {
    const reqUrl = `?email=${email}&password=${password}`;
    console.log(`${API.MAIN}${LOGIN}${reqUrl}`);
    axios
      .post(`${API.MAIN}${LOGIN}${reqUrl}`, {
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
            .content,
        },
      })
      .then((response) => {
        console.log(response.success);
        if (response.success) {
          // console.log(response.data);
          dispatch(
            logIn({
              email: emailRef.current.value,
              token: response.data.token,
              name: response.data.name,
              isLogin: true,
            })
          );
          history.push(DASHBOARD);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setLogin = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    logInRequest(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="row mb-5">
      <form className="text-center" noValidate onSubmit={setLogin}>
        <div className="col-12 m-3">
          <input
            className="login-input w-25"
            type="email"
            placeholder="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <div className="col-12 m-3">
          <input
            className="login-input w-25"
            type="password"
            placeholder="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <div className="col-12 mt-5">
          <Button
            variant="contained w-25"
            onClick={setLogin}
            className="login-btn"
          >
            LogIn
          </Button>
        </div>
      </form>
    </div>
  );
}
