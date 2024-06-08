import "./NewItem.css";

function NewItem({ handleAddItem }) {
  return (
    <section className="new-item">
      <form onSubmit={handleAddItem}>
        <div className="line">
          <label htmlFor="newItem">New Item: </label>
          <input type="text" name="newItem" id="newItem" />
        </div>
        <div className="line">
          <label htmlFor="qty">Quantity: </label>
          <input type="number" name="qty" id="qty" />
        </div>
        <button type="submit">ADD</button>
      </form>
    </section>
  );
}

export default NewItem;
