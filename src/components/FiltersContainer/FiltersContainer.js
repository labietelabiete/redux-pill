import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { MenuItem, Select } from "@material-ui/core";

import { updateFilter, resetFilter } from "../../redux/filter/actions";
// import initialFilterState from "../../redux/filter/state";
import { fetchFiltered } from "../../redux/propertiesData/actions";

import "./FiltersContainer.scss";

const useStyles = makeStyles({
  slider: {
    width: "80%",
  },
});

function valuetext(value) {
  return `$${value / 1000}k`;
}

export default function FiltersContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);

  useEffect(() => {
    // console.log(filterState);
    // if (initialFilterState !== filterState)
    dispatch(fetchFiltered(filterState));
  }, [dispatch, filterState]);

  const handleTypeOfHouse = (event) => {
    dispatch(
      updateFilter({
        ...filterState,
        typeOfHome: {
          ...filterState.typeOfHome,
          [event.target.name]: event.target.checked,
        },
      })
    );
  };

  const handleBedrooms = (event) => {
    const target =
      event.target.name === undefined
        ? event.target.parentElement.name
        : event.target.name;
    dispatch(
      updateFilter({
        ...filterState,
        bedrooms: {
          ...filterState.bedrooms,
          [target]: !filterState.bedrooms[target],
        },
      })
    );
  };

  const handleBathrooms = (event) => {
    const target =
      event.target.name === undefined
        ? event.target.parentElement.name
        : event.target.name;
    dispatch(
      updateFilter({
        ...filterState,
        bathrooms: {
          ...filterState.bathrooms,
          [target]: !filterState.bathrooms[target],
        },
      })
    );
  };

  const handleRange = (event, newValue) => {
    dispatch(
      updateFilter({
        ...filterState,
        priceRange: newValue,
      })
    );
  };

  const handlePublicationDate = (event) => {
    dispatch(
      updateFilter({
        ...filterState,
        publication_date: event.target.value,
      })
    );
  };

  const handleMoreFilters = (event) => {
    dispatch(
      updateFilter({
        ...filterState,
        moreFilters: {
          ...filterState.moreFilters,
          [event.target.name]: event.target.checked,
        },
      })
    );
  };
  const handleEquipment = (event) => {
    dispatch(
      updateFilter({
        ...filterState,
        equipment: event.target.value,
      })
    );
  };

  const handleCondition = (event) => {
    dispatch(
      updateFilter({
        ...filterState,
        condition: {
          ...filterState.condition,
          [event.target.name]: event.target.checked,
        },
      })
    );
  };

  return (
    <FormGroup>
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-3">
            <h5>Type of Home</h5>
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.typeOfHome.flatApartment}
                  onChange={handleTypeOfHouse}
                  name="flatApartment"
                />
              }
              label="Flat/Apartment"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.typeOfHome.duplex}
                  onChange={handleTypeOfHouse}
                  name="duplex"
                />
              }
              label="Duplex"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.typeOfHome.house}
                  onChange={handleTypeOfHouse}
                  name="house"
                />
              }
              label="House"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.typeOfHome.penthouse}
                  onChange={handleTypeOfHouse}
                  name="penthouse"
                />
              }
              label="Penthouse"
            />
          </div>

          <div className="col-4">
            <h5>Bedrooms</h5>
            <Button
              variant="contained"
              color={filterState.bedrooms[0] ? "secondary" : "primary"}
              onClick={handleBedrooms}
              name={0}
              className="m-1"
            >
              0 (studio flat)
            </Button>
            <Button
              variant="contained"
              color={filterState.bedrooms[1] ? "secondary" : "primary"}
              onClick={handleBedrooms}
              name={1}
              className="m-1"
            >
              1
            </Button>
            <Button
              variant="contained"
              color={filterState.bedrooms[2] ? "secondary" : "primary"}
              onClick={handleBedrooms}
              name={2}
              className="m-1"
            >
              2
            </Button>
            <Button
              variant="contained"
              color={filterState.bedrooms[3] ? "secondary" : "primary"}
              onClick={handleBedrooms}
              name={3}
              className="m-1"
            >
              3
            </Button>
            <Button
              variant="contained"
              color={filterState.bedrooms[4] ? "secondary" : "primary"}
              onClick={handleBedrooms}
              name={4}
              className="m-1"
            >
              4 or +
            </Button>
          </div>

          <div className="col-3">
            <h5>Bathrooms</h5>
            <Button
              variant="contained"
              color={filterState.bathrooms[0] ? "secondary" : "primary"}
              onClick={handleBathrooms}
              name={0}
              className="m-1"
            >
              1
            </Button>
            <Button
              variant="contained"
              color={filterState.bathrooms[1] ? "secondary" : "primary"}
              onClick={handleBathrooms}
              name={1}
              className="m-1"
            >
              2
            </Button>
            <Button
              variant="contained"
              color={filterState.bathrooms[2] ? "secondary" : "primary"}
              onClick={handleBathrooms}
              name={2}
              className="m-1"
            >
              3 or +
            </Button>
          </div>

          <div className="col-2">
            <h5>Equipment</h5>
            <Select
              className="w-100 filter-input"
              value={filterState.equipment}
              onChange={handleEquipment}
            >
              <MenuItem className="w-100 filter-input" s value={"indifferent"}>
                Indifferent
              </MenuItem>
              <MenuItem value={"empty"}>Empty</MenuItem>
              <MenuItem value={"furnished"}>Furnished</MenuItem>
            </Select>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h5>Condition</h5>
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.condition.new}
                  onChange={handleCondition}
                  name="new"
                />
              }
              label="New homes"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.condition.goodCondition}
                  onChange={handleCondition}
                  name="goodCondition"
                />
              }
              label="Good condition"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.condition.needsRenovation}
                  onChange={handleCondition}
                  name="needsRenovation"
                />
              }
              label="Needs renovation"
            />
          </div>

          <div className="col-4">
            <h5>More filters</h5>
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.pet}
                  onChange={handleMoreFilters}
                  name="pet"
                />
              }
              label="Pets allowed"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.lift}
                  onChange={handleMoreFilters}
                  name="lift"
                />
              }
              label="Lift"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.garden}
                  onChange={handleMoreFilters}
                  name="garden"
                />
              }
              label="Garden"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.air_conditioning}
                  onChange={handleMoreFilters}
                  name="air_conditioning"
                />
              }
              label="Air condition"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.swimming_pool}
                  onChange={handleMoreFilters}
                  name="swimming_pool"
                />
              }
              label="Swimming pool"
            />
            <FormControlLabel
              className="filter-input"
              control={
                <Checkbox
                  className="pe-0"
                  checked={filterState.moreFilters.terrace}
                  onChange={handleMoreFilters}
                  name="terrace"
                />
              }
              label="Terrace"
            />
          </div>

          <div className="col-3">
            <h5>Price Range</h5>
            <div className={classes.slider}>
              <Slider
                value={filterState.priceRange}
                onChange={handleRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                valueLabelFormat={valuetext}
                min={50000}
                max={1000000}
                step={10000}
              />
            </div>
          </div>

          <div className="col-2">
            <h5>Publication date</h5>
            <Select
              className="w-100 filter-input"
              value={filterState.publication_date}
              onChange={handlePublicationDate}
            >
              <MenuItem value={"any"} default>
                Any
              </MenuItem>
              <MenuItem value={"24"}>Last 24 hours</MenuItem>
              <MenuItem value={"48"}>Last 48 hours</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </FormGroup>
  );
}
