import React from "react";

import SearchBar from "../../components/SearchBar";

import "./Home.scss";

import logo from "../../assets/images/logo.png";

export default function Home() {
  return (
    <div className="home-container container m-0 p-0 mt-2 overflow-hidden">
      <div className="row text-center w-100 mb-2 me-0">
        <div className="col-12">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="col-12">
          <SearchBar />
        </div>
      </div>
      <div className="row text-center me-0 w-100">
        <img className="logo w-100 p-0" src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="" />
      </div>
    </div>
  );
}
