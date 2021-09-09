import React from "react";

import { Link } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import HomeIcon from "@material-ui/icons/Home";

import { HOME, DASHBOARD } from "../../constants/routes";

import "./Header.scss";

import logo from "../../assets/images/logo-white.png";

export default function Header() {
  return (
    <div className="header-container backgroundYellow d-flex justify-content-between align-items-center px-3">
      <Link className="h-100 d-flex align-items-center" to={HOME}>
        <img className="logo h-100 p-2" src={logo} alt="" />
      </Link>
      <div className="pe-5">
        <Link to={HOME}>
          <HomeIcon className="colorWhite header-icon m-2" />
        </Link>
        <Link to={DASHBOARD}>
          <FilterListIcon className="colorWhite header-icon m-2" />
        </Link>
      </div>
    </div>
  );
}
