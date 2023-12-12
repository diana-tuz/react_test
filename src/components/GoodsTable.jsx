import React from "react";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export const GoodsTable = ({goods}) => (

<table border="1">
  <TableHead />
  <tbody>
    {goods.map(({name, type, price, remained, color, country}) => (
    <TableRow name={name} type={type} price={price} remained={remained} color={color} country={country} />
  ))}
  </tbody>
</table>

)