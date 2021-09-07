const initialState = {
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
  equipment: "",
  condition: {
    newHomes: false,
    goodCondition: false,
    needsRenovation: false,
  },
  priceRange: {
    bottom: 0,
    top: 100000,
  },
  publicationDate: "",
  moreFilters: {
    petsAllowed: false,
    lift: false,
    garden: false,
    airConditioning: false,
    swimmingPool: false,
    terrace: false,
  },
};

export default initialState;
