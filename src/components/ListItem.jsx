
export const ListItem = ({ item, delItem }) => {
  return (
    <li className="list-item">
      <p>{item}</p>
      <button type="button" onClick={() => delItem(item)}>Del</button>
    </li>
  );
};
