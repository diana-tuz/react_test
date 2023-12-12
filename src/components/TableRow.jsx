import React from "react";

export const TableRow = ({ name, type, price, remained, color, country }) => (
  <tr>
    <td>{name}</td>
    <td>{type}</td>
    <td>{price}</td>
    <td>{remained}</td>
    <td style={{ color }}>{color}</td>
    <td>{country}</td>
  </tr>
);
