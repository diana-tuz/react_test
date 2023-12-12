import "./App.css";
import { List } from "./components/List";
import { goods } from "./goods";
function App() {
  return (
    <div className="App">
      <List goods={goods} />
    </div>
  );
}

export default App;
