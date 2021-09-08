import React from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";


function Dashboard() {
  const propertiesData = useSelector((state) => state.propertiesData);

  return (
    <>
      <FiltersContainer />
      <PropertiesTable dataList={propertiesData} />
    </>
  );
}

export default withLayout(Dashboard);
