import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { updateQuery, fetchQuery } from "../../redux/search/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100px",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  const updateSearch = (e) => {
    dispatch(updateQuery({ ...searchState, query: e.target.value }));
    e.target.value = searchState.query;
  };

  const getSearch = (e) => {
    e.preventDefault();
    dispatch(fetchQuery({ ...searchState, query: searchState.query }));
    dispatch(updateQuery({ ...searchState, query: "" }));
  };

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label=""
        value={searchState.query}
        onChange={updateSearch}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
        onClick={getSearch}
      >
        Search
      </Button>
    </form>
  );
}
