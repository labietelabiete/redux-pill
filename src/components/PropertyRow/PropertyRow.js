import React from "react";

import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';


export default function PropertyRow({ item }) {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      {/* <th>
        <img style={{width: "150px"}} src="https://images.unsplash.com/photo-1506499802526-830edae0cb9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="appartments"></img>
      </th> */}
      <td>{item.street} {item.number}, {item.city} ({item.province}) {item.country}</td>
      <td>${item.price}</td>
      <td><HotelIcon /> {item.room} <BathtubIcon /> {item.bath}</td>
    </tr>
  );
}
