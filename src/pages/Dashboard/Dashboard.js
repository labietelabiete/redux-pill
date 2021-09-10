import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import ClearButton from "../../components/ClearButton/ClearButton";

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

  return (
    <>
      <div className="container p-1">
        <SearchBar alignment="text-start" />
        <FiltersContainer priceRange={priceRange} />
        <ClearButton />
        {propertiesData && <PropertiesTable dataList={propertiesData} />}
      </div>
    </>
  );
}

export default withLayout(Dashboard);
