import React from "react";

import Login from "../../components/Login";

import logo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <div className="home-container container m-0 p-0 mt-2 overflow-hidden">
      <div className="row text-center w-100 my-5 me-0">
        <div className="col-12">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="col-12">
          <Login />
        </div>
      </div>
    </div>
  );
}
