import { useState } from "react";
import "./App.css";
import { GoodsTable } from "./components/GoodsTable";
import { goods } from "./goods";

function App() {
  const filteredGoods = goods.filter((good) => good.type === "fruits");
  // const sortedGoods = filteredGoods.sort((good1, good2) => good1.price - good2.price)
  const sortedGoods = filteredGoods.sort((good1, good2) =>
    good1.name.localeCompare(good2.name)
  );

  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <button type="button" onClick={() => setNumber(number + 1)}>
        Pressed {number}
      </button>
      <GoodsTable goods={sortedGoods} />
    </div>
  );
}

export default App;
