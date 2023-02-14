import React from "react";
import useTodo from "../hooks/useTodo";

export const TodoContext = React.createContext();

export default function TodoContextt({ children }) {
  const { list, sortedTodos, addTodo, setSort } = useTodo();

  return (
    <TodoContext.Provider value={{ list, sortedTodos, addTodo, setSort }}>
      {children}
    </TodoContext.Provider>
  );
}
