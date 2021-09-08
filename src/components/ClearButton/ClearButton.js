import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";

import { resetFilter } from "../../redux/filter/actions";

export default function ClearButton() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="row mt-5 mb-5 text-end w-25">
      <Button variant="contained" color="secondary" onClick={handleClear}>
        Clear filters
      </Button>
    </div>
  );
}
