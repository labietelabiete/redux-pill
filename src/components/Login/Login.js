import React, { useRef } from "react";

import Button from "@material-ui/core/Button";

import "./Login.scss";

export default function Login() {
  const setLogin = () => {};
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="row mb-5">
      <form className="text-center" noValidate onSubmit={setLogin}>
        <div className="col-12 m-3">
          <input className="login-input w-25" type="email" placeholder="email" id="email" ref={emailRef} />
        </div>
        <div className="col-12 m-3">
          <input className="login-input w-25" type="password" placeholder="password" id="password" ref={passwordRef} />
        </div>
        <div className="col-12 mt-5">
          <Button variant="contained w-25"   onClick={setLogin} className="login-btn">
            LogIn
          </Button>
        </div>
      </form>
    </div>
  );
}
