import { useState } from "react";

export const Add = ({setArrayGoods}) => {



  const [newGood, setNewGood] = useState('');
  return (
    <div className="add-input">
      <label>Add new good</label>
      <input type="text" value={newGood} onChange={(event) => setNewGood(event.target.value)}/>
      <button type="button" onClick={() => setArrayGoods((array) => [...array, newGood])}>Add</button>
    </div>
  );
};
