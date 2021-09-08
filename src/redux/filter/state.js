import { FILTER_STATE_KEY } from "../../constants/local-storage-keys";


const defaultState = {
  typeOfHome: {
    flatApartment: false,
    duplex: false,
    house: false,
    penthouse: false,
  },
  bedrooms: {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  },
  bathrooms: {
    0: false,
    1: false,
    2: false,
  },
  equipment: "indifferent",
  condition: {
    new: false,
    goodCondition: false,
    needsRenovation: false,
  },
  priceRange: [100000, 100001],
  publication_date: "any",
  moreFilters: {
    pet: false,
    lift: false,
    garden: false,
    air_conditioning: false,
    swimming_pool: false,
    terrace: false,
  },
  query: "",
};

const initialState = JSON.parse(localStorage.getItem(FILTER_STATE_KEY)) || defaultState;


export default initialState;
