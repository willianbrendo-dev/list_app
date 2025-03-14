"use client";

import { useState, useEffect } from "react";

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

function Item({ item, setTodos }) {
  const [editing, setEditing] = React.useState(false);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };
  
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInpuSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <li id={item?.id} className="todo_item" onClick={completeTodo}>
      <button className="todo_items_left">
        <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TODOList;
