import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDiscription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip</h3>
      <select
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => {
          setDiscription(e.target.value);
        }}
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}{" "}
      </span>
      <button>❌ </button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You Have X items on your list,and you already packed X (X%)</em>
    </footer>
  );
}
