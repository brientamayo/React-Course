import { useState, useRef } from "react";
import PopupContent from "./PopupContent";
const CopyValue = () => {
  const [inputValue, setInputValue] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputValue) return
    setCopiedText(inputValue)
    navigator.clipboard.writeText(inputValue);
    setInputValue('');
    setCopied(true);
    inputRef.current.value = '';
    setTimeout(() => {setCopied(false)}, 3000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-1 rounded-md border-slate-600"
          placeholder="Enter text to Copy"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <button 
          type="submit"
          className="bg-emerald-500 text-white p-1 rounded-md">Copy
        </button>
      </form>

      <PopupContent copied={copied} textCopied={copiedText}/>
    </div>
  );
};

export default CopyValue;
