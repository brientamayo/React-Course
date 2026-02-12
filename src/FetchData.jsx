import { useEffect } from "react";
import { useState, useRef } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        if (data && data.length > 0) setData(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
        <h1>Data</h1>
      {data.length < 0 && <p>No Data found!</p>}
      {data.length > 0 && (
        <ul>
          {data.map((d, index) => (
            <li key={d.id}>
              {index + 1}. {d.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
