import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ itemList }) {
  return (
    <section className="item-list">
      <ul className="list">
        {itemList.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ItemList;
