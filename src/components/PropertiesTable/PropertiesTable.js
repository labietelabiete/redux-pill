import React from "react";
import PropertyRow from "../PropertyRow";

export default function PropertiesTable({ dataList }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Address</th>
          <th scope="col">Price</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((item) => (
          <PropertyRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
