import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { updateFilter } from "../../redux/filter/actions";
import { fetchFiltered } from "../../redux/propertiesData/actions";

import { DASHBOARD } from "../../constants/routes";

import "./SearchBar.scss";

export default function SearchBar({ alignment }) {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const searchRef = useRef();

  const history = useHistory();

  let currentUrl = useLocation().pathname;
  currentUrl = currentUrl.split("/")[currentUrl.split("/").length - 1];

  const getSearch = (event) => {
    event.preventDefault();
    if (searchRef.current.value === "") return;
    dispatch(
      updateFilter({
        ...filterState,
        query: searchRef.current.value,
      })
    );
    dispatch(fetchFiltered(filterState));

    if (currentUrl !== "dashboard") {
      console.log("No estoy en dashboard");
      history.push(DASHBOARD);
    }
    searchRef.current.value = "";
  };

  return (
    <div className="row mb-5">
      <form className={alignment} noValidate onSubmit={getSearch}>
        <input className="search-input" id="inputid" ref={searchRef} />
        <Button
          variant="contained"
          color="secondary"
          onClick={getSearch}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
