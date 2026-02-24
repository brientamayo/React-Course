import { useState, useRef, useEffect } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <p>Timer: {count} seconds</p>
      <button onClick={() => {clearInterval(intervalRef.current)}} className="bg-emerald-500 cursor-pointer rounded-md px-4 py-1 text-white">Stop Timer</button>
    </div>
  );
};

export default Timer;
