import React from "react";

export const Filter = ({category, getFilteredGoods}) => (
  <select id="filter" onChange={(event) => getFilteredGoods(event.target.value)}>
    <option value="default">Default</option>
    {category.map((element) => (
      <option value={element}>{element}</option>

    ))}
  </select>
)