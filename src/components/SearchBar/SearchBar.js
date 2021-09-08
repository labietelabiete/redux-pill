import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { updateQuery, fetchQuery } from "../../redux/search/actions";

import "./SearchBar.scss";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchRef = useRef();

  const getSearch = (e) => {
    e.preventDefault();
    const currentValue = searchRef.current.value;
    console.log(currentValue);
  };

  return (
    <form
      className="text-center"
      noValidate
      autoComplete="off"
      onSubmit={getSearch}
    >
      <img src="./../../assets/images/logo.png" alt="logo"></img>

      <input className="search-input" id="inputid" ref={searchRef} />
      <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
        Search
      </Button>
    </form>
  );
}
