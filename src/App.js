import "./styles.css";
import { useEffect, useState } from "react";
import useFetch from "./util/hooks";

export default function App() {
  const [data, setData] = useState();

  useFetch(data);

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="todo-list">
        {data &&
          data.todo.map((el) => {
            return <li key={el.id}>{el.todo}</li>;
          })}
      </div>
    </div>
  );
}
