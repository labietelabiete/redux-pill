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
  equipment: "indifferent",
  condition: {
    new: false,
    goodCondition: false,
    needsRenovation: false,
  },
  priceRange: [50000, 500000],
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

export default initialState;
