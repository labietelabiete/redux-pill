import React from "react";
import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

import { data } from "../../data/mock-db";
import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";

function Dashboard() {
  return (
    <>
      <FiltersContainer />
      <PropertiesTable dataList={data.properties} />
    </>
  );
}

export default withLayout(Dashboard);
