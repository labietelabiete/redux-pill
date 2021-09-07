import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid, InputLabel, MenuItem, Paper, Select } from "@material-ui/core";

import { updateFilter, resetFilter } from "../../redux/filter/actions";

const useStyles = makeStyles({
  slider: {
    width: "80%",
  },
});

function valuetext(value) {
  console.log(value);
  console.log(`${value / 1000}k`);
  return `${value / 1000}k`;
}

export default function FiltersContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState([50000, 500000]);
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);

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
        publicationDate: event.target.value,
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

  return (
    <Paper elevation={3}>
      <FormControl>
        <FormGroup>
          <Grid container justifyContent="center" spacing={2}>
            {/* <div className="row"> */}
            {/* <div className="col-2"> */}
            <Grid item xs={3}>
              <h4>Type of Home</h4>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.typeOfHome.flatApartment}
                    onChange={handleTypeOfHouse}
                    name="flatApartment"
                  />
                }
                label="Flat/Apartment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.typeOfHome.duplex}
                    onChange={handleTypeOfHouse}
                    name="duplex"
                  />
                }
                label="Duplex"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.typeOfHome.house}
                    onChange={handleTypeOfHouse}
                    name="house"
                  />
                }
                label="House"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.typeOfHome.penthouse}
                    onChange={handleTypeOfHouse}
                    name="penthouse"
                  />
                }
                label="Penthouse"
              />
            </Grid>
            {/* </div> */}
            {/* <div className="col-3"> */}
            <Grid item xs={3}>
              <h4>Bedrooms</h4>
              <Button
                variant="contained"
                color={filterState.bedrooms[0] ? "primary" : "secondary"}
                onClick={handleBedrooms}
                name={0}
              >
                0 (studio flat)
              </Button>
              <Button
                variant="contained"
                color={filterState.bedrooms[1] ? "primary" : "secondary"}
                onClick={handleBedrooms}
                name={1}
              >
                1
              </Button>
              <Button
                variant="contained"
                color={filterState.bedrooms[2] ? "primary" : "secondary"}
                onClick={handleBedrooms}
                name={2}
              >
                2
              </Button>
              <Button
                variant="contained"
                color={filterState.bedrooms[3] ? "primary" : "secondary"}
                onClick={handleBedrooms}
                name={3}
              >
                3
              </Button>
              <Button
                variant="contained"
                color={filterState.bedrooms[4] ? "primary" : "secondary"}
                onClick={handleBedrooms}
                name={4}
              >
                4 or +
              </Button>
            </Grid>
            {/* </div> */}
            {/* <div className="col-2"> */}
            <Grid item xs={2}>
              <h4>Bathrooms</h4>
              <Button variant="contained" color="primary">
                1
              </Button>
              <Button variant="contained" color="primary">
                2
              </Button>
              <Button variant="contained" color="primary">
                3 or +
              </Button>
              {/* </div> */}
            </Grid>
            {/* <div className="col-5"> */}
            <Grid item xs={4}>
              <h4>Equipment</h4>
              <FormControl>
                <Select value={"indifferent"} onChange={() => {}}>
                  <MenuItem value={"indifferent"}>Indifferent</MenuItem>
                  <MenuItem value={20}>
                    Twenty dsfgsfsdfsdffsdfsdfsdfsdf
                  </MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {/* </div> */}
            </Grid>

            {/* <div className="col-2"> */}
            <Grid item xs={2}>
              <h4>Condition</h4>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    name="new-homes"
                  />
                }
                label="New homes"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    name="good-condition"
                  />
                }
                label="Good condition"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    name="needs-renovation"
                  />
                }
                label="Needs renovation"
              />
              {/* </div> */}
            </Grid>
            {/* <div className="col-3"> */}
            <Grid item xs={3}>
              <h4>Price Range</h4>
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
              {/* </div> */}
            </Grid>
            {/* <div className="col-2"> */}
            <Grid item xs={2}>
              <h4>Publication date</h4>
              {/* <FormControl> */}
              {/* <InputLabel htmlFor="equipment">Age</InputLabel> */}
              <Select
                value={filterState.publicationDate}
                onChange={handlePublicationDate}
                // defaultValue={filterState.publicationDate}
              >
                <MenuItem value={"any"} default>
                  Any
                </MenuItem>
                <MenuItem value={"24"}>Last 24 hours</MenuItem>
                <MenuItem value={"48"}>Last 48 hours</MenuItem>
              </Select>
              {/* </FormControl> */}
              {/* </div> */}
            </Grid>
            {/* <div className="col-5"> */}
            <Grid item xs={5}>
              <h4>More filters</h4>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.petsAllowed}
                    onChange={handleMoreFilters}
                    name="petsAllowed"
                  />
                }
                label="Pets allowed"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.lift}
                    onChange={handleMoreFilters}
                    name="lift"
                  />
                }
                label="Lift"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.garden}
                    onChange={handleMoreFilters}
                    name="garden"
                  />
                }
                label="Garden"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.airConditioning}
                    onChange={handleMoreFilters}
                    name="airConditioning"
                  />
                }
                label="Air condition"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.swimmingPool}
                    onChange={handleMoreFilters}
                    name="swimmingPool"
                  />
                }
                label="Swimming pool"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterState.moreFilters.terrace}
                    onChange={handleMoreFilters}
                    name="terrace"
                  />
                }
                label="Terrace"
              />
              {/* </div> */}
            </Grid>
            {/* </div> */}
          </Grid>
        </FormGroup>
      </FormControl>
    </Paper>
  );
}
