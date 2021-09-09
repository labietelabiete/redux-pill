import React from "react";

import SearchBar from "../../components/SearchBar";

import "./Home.scss";

import logo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <div className="home-container container mt-5">
      <div className="row">
        <div className="col text-center">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
      <div className="row text-center">
        {/* <div className="col-12 text-center">
          <h3 className="colorGrey">Stop being an Okupa!</h3>
        </div> */}
        <div className="col-12 text-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
