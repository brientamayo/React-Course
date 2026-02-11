import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const inputRef = useRef();
  const quantityRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const newItem = { name, quantity };
    setItems([...items, newItem]);
    setName("");
    setQuantity(0);
    inputRef.current.value = "";
    quantityRef.current.value = "";
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="border rounded-md p-1"
          type="text"
          placeholder="Enter item name"
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border rounded-md p-1"
          type="number"
          placeholder="Enter item quantity"
          ref={quantityRef}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button
          type="submit"
          className="p-2 text-sm bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer rounded-md"
        >
          Add Item
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Quantity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan="3" className="text-slate-500">
                No items in the list
              </td>
            </tr>
          )}
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="p-1 rounded-md cursor-pointer"
                  onClick={() => handleDeleteItem(index)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
