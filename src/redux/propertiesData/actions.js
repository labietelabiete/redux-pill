import { SET_DATA, CLEAR_DATA } from "./types";
import { API } from "../../constants/routes";
const axios = require("axios");

export const fetchAll = () => {
  return async (dispatch) => {
    axios.get(`${API.MAIN}${API.PROPERTIES}`).then((response) => {
      // console.log("response", response);
      dispatch({
        type: SET_DATA,
        payload: response.data,
      });
    });
  };
};

export const fetchFiltered = (filterState) => {
  let reqUrl = "";
  // TYPE OF HOME
  if (filterState.typeOfHome.flatApartment) reqUrl += `&type=flat/apartment`;
  if (filterState.typeOfHome.duplex) reqUrl += `&type=duplex`;
  if (filterState.typeOfHome.house) reqUrl += `&type=house`;
  if (filterState.typeOfHome.penthouse) reqUrl += `&type=penthouse`;
  // ROOMS
  Object.keys(filterState.bedrooms).forEach((key) => {
    if (filterState.bedrooms[key]) reqUrl += `&room=${key}`;
  });
  // BATHROOMS
  Object.keys(filterState.bathrooms).forEach((key) => {
    if (filterState.bathrooms[key]) reqUrl += `&bathroom=${key}`;
  });
  // EQUIPMENT
  if (filterState.equipment === "empty") reqUrl += `&equipment=empty`;
  if (filterState.equipment === "furnished") reqUrl += `&equipment=furnished`;
  // CONDITION
  Object.keys(filterState.condition).forEach((key) => {
    if (filterState.condition[key]) reqUrl += `&condition=${key}`;
  });

  // PRICE RANGE 🤑🤑🤑
  reqUrl += `&price_gte=${filterState.priceRange[0]}&price_lte=${filterState.priceRange[1]}`;

  // TODO PUBLICATION DATE

  // MORE FILTERS
  Object.keys(filterState.moreFilters).forEach((key) => {
    if (filterState.moreFilters[key]) reqUrl += `&${key}=true`;
  });

  console.log(filterState.query);
  // SEARCH FILTER
  if (filterState.query !== "") {
    console.log("Hay query");
    reqUrl += `&q=${filterState.query.substr(0, filterState.query.length)}`;
  }

  console.log(reqUrl);

  return async (dispatch) => {
    axios.get(`${API.MAIN}${API.PROPERTIES}?${reqUrl}`).then((response) => {
      // console.log("response", response);
      dispatch({
        type: SET_DATA,
        payload: response.data,
      });
    });
  };
};

export const clearData = () => ({ type: CLEAR_DATA });

// const response = await fetch(`${API.MAIN}${API.PROPERTIES}`);
// const result = await response.json();
// console.log("result", result);
