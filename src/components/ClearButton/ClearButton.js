import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";

import { resetFilter } from "../../redux/filter/actions";

import "./ClearButton.scss"

export default function ClearButton() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(resetFilter());
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: "#ee8434"
  };

  return (
    <div className="row mt-4 mb-5">
      <div className="col-12 text-end">
        <Button className="clear-btn" variant="contained" onClick={handleClear}>
          Clear filters
        </Button>
      </div>
    </div>
  );
}
