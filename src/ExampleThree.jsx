import { useState } from "react";

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };

  const handleClear = () => {
    setName("");
    localStorage.removeItem("name");
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <div className="flex items-center gap-2">
        <input className="border border-slate-500 rounded-md p-1" type="text" value={name} onChange={handleChange} />
        <button
          className="p-1 x-2 rounded-md bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="p-1 x-2 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer text-white"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ExampleThree;
