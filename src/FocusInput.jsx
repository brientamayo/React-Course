import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Hello, World!";
  };
  return (
    <div>
      <h1>Focus Input</h1>
      <input
        ref={inputElement}
        type="text"
        placeholder="Type something..."
        className="border p-1 rounded-md mr-2"
      />
      <button
        onClick={() => focusInput()}
        className="bg-emerald-500 px-4 py-1 text-white hover:bg-emerald-600 cursor-pointer rounded-md"
      >
        Focus
      </button>
    </div>
  );
};

export default FocusInput;
