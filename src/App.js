import "./App.css";

import shoppingList from "./data/list.json";
import { getId } from "./utils/utils";

import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import { useState } from "react";
import NewItem from "./components/NewItem/NewItem";

function App() {
  const [itemList, setItemList] = useState(shoppingList);

  function handleAddItem(event) {
    event.preventDefault();
    if (!event.target.newItem.value) {
      alert("Invalid item name");
      return;
    }
    const newItem = {
      id: getId(itemList),
      name: event.target.newItem.value,
      quantity: event.target.qty.value,
      checked: false,
    };
    const newArr = [...itemList];
    newArr.push(newItem);
    setItemList(newArr);
    event.target.reset();
  }

  function handleRemove(itemId) {
    const newArr = itemList.filter((item) => item.id !== itemId);
    setItemList(newArr);
  }

  return (
    <div className="App">
      <Header />
      <ItemList itemList={itemList} handleRemove={handleRemove} />
      <NewItem handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
