import React from "react";

import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';


export default function PropertyRow({ item }) {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.street} {item.number}, {item.city} ({item.province}) {item.country}</td>
      <td>${item.price}</td>
      <td><HotelIcon /> {item.room} <BathtubIcon /> {item.bath}</td>
    </tr>
  );
}
