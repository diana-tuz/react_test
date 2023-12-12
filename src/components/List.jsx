import React from "react";

export const List = ({ goods }) => (
  <>
    <ol>
      {goods.map((good) => (
        <li style={{ color: good.color }}>{good.name}</li>
      ))}
    </ol>
  </>
);
