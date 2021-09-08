import React from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import ClearButton from "../../components/ClearButton/ClearButton";

function Dashboard() {
  const propertiesData = useSelector((state) => state.propertiesData);

  return (
    <div className="container p-5">
      <SearchBar alignment="text-start" />
      <FiltersContainer />
      <ClearButton />
      <PropertiesTable dataList={propertiesData} />
    </div>
  );
}

export default withLayout(Dashboard);
