import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Add } from "./components/Add";

function App() {
  const goods = ["Cucumbers", "Apples", "Potatoes", "Bananas", "Onions"];

  const [arrayGoods, setArrayGoods] = useState(goods);

  return <div className="App">
    <Add setArrayGoods={setArrayGoods}/>
    <List goods={arrayGoods} setGoods={setArrayGoods}/>
  </div>;
}

export default App;
