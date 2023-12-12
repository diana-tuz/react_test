import "./App.css";
import { GoodsTable } from "./components/GoodsTable";
import { goods } from "./goods";


function App() {
  const filteredGoods = goods.filter((good) => good.type === 'fruits')
  // const sortedGoods = filteredGoods.sort((good1, good2) => good1.price - good2.price)
  const sortedGoods = filteredGoods.sort((good1, good2) => good1.name.localeCompare(good2.name))
  
  return (
    <div className="App">
      <GoodsTable goods={sortedGoods}/>
    </div>
  );
}

export default App;
