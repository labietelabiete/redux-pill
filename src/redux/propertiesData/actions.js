import { SET_DATA, CLEAR_DATA } from "./types";
import { API } from "../../constants/routes";
import { populateUrl } from "../../utils/url-creation";
const axios = require("axios");

export const fetchAll = () => {
  return async (dispatch) => {
    axios.get(`${API.MAIN}${API.PROPERTIES}`).then((response) => {
      dispatch({
        type: SET_DATA,
        payload: response.data,
      });
    });
  };
};

export const fetchFiltered = (filterState) => {
  const reqUrl = populateUrl(filterState);

  return async (dispatch) => {
    axios.get(`${API.MAIN}${API.PROPERTIES}${reqUrl}`).then((response) => {
      dispatch({
        type: SET_DATA,
        payload: response.data,
      });
    });
  };
};

export const clearData = () => ({ type: CLEAR_DATA });
