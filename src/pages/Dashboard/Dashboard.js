import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";

// import { fetchAll, fetchFiltered } from "../../redux/propertiesData/actions";

function Dashboard() {
  const propertiesData = useSelector((state) => state.propertiesData);
  const [priceRange, setPriceRange] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const pricesArray = propertiesData.map((item) => item.price);
      if (pricesArray.length > 2) {
        setPriceRange([Math.min(...pricesArray), Math.max(...pricesArray)]);
        setLoaded(true);
      }
    }
  }, [propertiesData]);

  // useEffect(() => {
  //   dispatch(fetchAll());
  // }, []);

  // useEffect(() => {
  //   console.log(propertiesData);
  // }, [propertiesData]);
  return (
    <>
      <FiltersContainer priceRange={priceRange} />
      {propertiesData && <PropertiesTable dataList={propertiesData} />}
    </>
  );
}

export default withLayout(Dashboard);
