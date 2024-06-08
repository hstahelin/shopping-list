import "./App.css";

import shoppingList from "./data/list.json";

import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState(shoppingList);

  return (
    <div className="App">
      <Header />
      <ItemList itemList={itemList} />
    </div>
  );
}

export default App;
