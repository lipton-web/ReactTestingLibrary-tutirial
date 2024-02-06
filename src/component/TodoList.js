import { useEffect, useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodoList(json))
      .catch(() => {
        setErrorMsg("에러 발생...");
      });
  }, []);

  return (
    <>
      <h1>Todo</h1>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : undefined,
              }}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
