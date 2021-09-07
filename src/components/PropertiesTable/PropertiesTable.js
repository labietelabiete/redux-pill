import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function PropertiesTable({ dataList }) {
  return (
    <div>
      {dataList.map((item) => (
        <PropertyCard item={item} key={item.id} />
      ))}
    </div>
  );
}
