import React from "react";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <table className="todo-table">
        <thead>
            <th>{todo.id}</th>
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{todo.inputValue}</th>
            <button
              onClick={() =>
                dispatch({ type: "mark todo", payload: { id: todo.id } })
              }>
              {todo.complete ? "Completed" : "Not completed"}
            </button>
            <button onClick={() => dispatch({type: 'delete todo', payload: {id: todo.id}})}>Delete</button>
             </tr>
        </tbody>
      </table>
      {/* <span>{todo.inputValue}</span> */}
      {/* <button
        onClick={() =>
          dispatch({ type: "mark todo", payload: { id: todo.id } })
        }>
        {todo.complete ? "Completed" : "Not completed"}
      </button>
      <button>Delete</button> */}
    </div>
  );
};

export default TodoList;
