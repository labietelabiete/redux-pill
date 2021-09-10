import { defaultState } from "../constants/initial-filters";

export function urlStringToObject(stringUrl) {
  if (stringUrl === "") return false;
  let resultObject = defaultState;
  stringUrl = stringUrl.slice(2).split("&");
  stringUrl.forEach((element) => {
    if (element.split("=")[1] !== undefined) {
      const key = element.split("=")[0];
      let value = element.split("=")[1];

      switch (key) {
        case "type":
          if (value === "flat/apartment") value = "flatApartment";
          resultObject = {
            ...resultObject,
            typeOfHome: {
              ...resultObject.typeOfHome,
              [value]: true,
            },
          };
          break;
        case "room":
          resultObject = {
            ...resultObject,
            bedrooms: {
              ...resultObject.bedrooms,
              [value]: true,
            },
          };
          break;
        case "bath":
          resultObject = {
            ...resultObject,
            bathrooms: {
              ...resultObject.bathrooms,
              [parseInt(value) - 1]: true,
            },
          };
          break;
        case "equipment":
          resultObject = {
            ...resultObject,
            [key]: value,
          };
          break;
        case "condition":
          resultObject = {
            ...resultObject,
            [key]: {
              ...resultObject.condition,
              [value]: true,
            },
          };
          break;
        case "price_gte":
          resultObject = {
            ...resultObject,
            priceRange: [value],
          };
          break;
        case "price_lte":
          resultObject = {
            ...resultObject,
            priceRange: [resultObject.priceRange[0], value],
          };
          break;
        case "q":
          resultObject = {
            ...resultObject,
            query: value,
          };
          break;
        case "pet":
        case "lift":
        case "garden":
        case "air_conditioning":
        case "swimming_pool":
        case "terrace":
          resultObject = {
            ...resultObject,
            moreFilters: {
              ...resultObject.moreFilters,
              [key]: true,
            },
          };
          break;

        default:
          break;
      }
    }
  });
  return resultObject;
}
