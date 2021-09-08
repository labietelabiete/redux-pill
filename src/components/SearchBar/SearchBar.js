import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

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
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="" />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </form>
  );
}
