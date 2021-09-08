import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { updateFilter, resetFilter } from "../../redux/filter/actions";
import { fetchFiltered } from "../../redux/propertiesData/actions";

import { DASHBOARD } from "../../constants/routes";

import "./SearchBar.scss";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const searchRef = useRef();

  const history = useHistory();

  const getSearch = () => {
    dispatch(
      updateFilter({
        ...filterState,
        query: searchRef.current.value,
      })
    );
    dispatch(fetchFiltered(filterState));
    history.push(DASHBOARD);
  };

  return (
    <form className="text-center" noValidate autoComplete="off">
      {/* <img src="./../../assets/images/logo.png" alt="logo"></img> */}

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
  );
}
