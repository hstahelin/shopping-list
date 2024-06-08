import "./NewItem.css";

function NewItem({ handleAddItem }) {
  return (
    <section className="new-item">
      <hr className="divider" />
      <form onSubmit={handleAddItem}>
        <div className="line">
          <label htmlFor="newItem">New Item: </label>
          <input
            type="text"
            name="newItem"
            id="newItem"
            placeholder="Item name"
          />
        </div>
        <div className="line">
          <label htmlFor="qty">Quantity: </label>
          <input type="number" name="qty" id="qty" min={1} defaultValue={1} />
        </div>
        <button className="add" type="submit">
          + ADD
        </button>
      </form>
    </section>
  );
}

export default NewItem;
