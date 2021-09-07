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
  equipment: "First option",
  condition: {
    newHomes: false,
    goodCondition: false,
    needsRenovation: false,
  },
  priceRange: [50000, 500000],
  publicationDate: "any",
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
