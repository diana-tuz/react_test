import { ListItem } from "./ListItem";

export const List = ({ goods, setGoods }) => {
  const delItem = (item) => {
    setGoods(goods.filter((element) => element !== item));
  }
  return (
    <ul className="list">
      {goods.map((good, index) => (
        <ListItem key={index} item={good} delItem={delItem}/>
      ))}
    </ul>
  );
};
