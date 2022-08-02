import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add todo":
      return [...todos, newTodo(action.payload.inputValue)];
    case "mark todo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "delete todo":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), inputValue: value, complete: false };
};

const TodoUseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    dispatch({ type: "add todo", payload: { inputValue: inputValue } });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h2>My todo app:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoUseReducer;
