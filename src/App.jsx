import { useState } from "react";
import "./App.css";
import { GoodsTable } from "./components/GoodsTable";
import { goods } from "./goods";
import { Filter } from "./components/Filter";

function App() {
  const type = ["vegetables", "fruits", "greens"];
  const color = ["red", "green", "yellow"];

  const [preparedGoods, setPreparedGoods] = useState(goods);

  const getFilteredGoods = (selectType) => {
    if (selectType === "default") {
      setPreparedGoods(goods);
    } else{   
      const filteredGoods = goods.filter(good => good.type === selectType);
      setPreparedGoods(filteredGoods);
    }
  }

  const getFilterByColor = (selectColor) => {
    if (selectColor === "default") {
      setPreparedGoods(goods);
    } else {
      const filteredGoods = goods.filter(good => good.color === selectColor);
      setPreparedGoods(filteredGoods);
    }
  }

  return (
    <div className="App">
      <Filter category={type} getFilteredGoods={getFilteredGoods} />
      <Filter category={color} getFilteredGoods={getFilterByColor} />
      <GoodsTable goods={preparedGoods} />
    </div>
  );
}

export default App;
