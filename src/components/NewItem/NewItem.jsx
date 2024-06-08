import "./NewItem.css";

function NewItem({ handleAddItem }) {
  return (
    <section className="new-item">
      <form onSubmit={handleAddItem}>
        <label htmlFor="newItem">New Item: </label>
        <input type="text" name="newItem" id="newItem" />
        <label htmlFor="qty">Quantity: </label>
        <input type="number" name="qty" id="qty" />
        <button type="submit">ADD</button>
      </form>
    </section>
  );
}

export default NewItem;
