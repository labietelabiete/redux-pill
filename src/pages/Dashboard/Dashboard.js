import React from "react";
import { useSelector } from "react-redux";

import withLayout from "../../hoc/withLayout";
import PropertiesTable from "../../components/PropertiesTable";

// import { data } from "../../data/mock-db";
import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";

// import { fetchAll, fetchFiltered } from "../../redux/propertiesData/actions";

function Dashboard() {
  const propertiesData = useSelector((state) => state.propertiesData);

  // useEffect(() => {
  //   dispatch(fetchAll());
  // }, []);

  // useEffect(() => {
  //   console.log(propertiesData);
  // }, [propertiesData]);
  return (
    <>
      <FiltersContainer />
      <PropertiesTable dataList={propertiesData} />
    </>
  );
}

export default withLayout(Dashboard);
