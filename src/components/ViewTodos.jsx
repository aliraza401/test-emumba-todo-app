import React from "react";
import { TodoContext } from "../context/todo-context";
import TodoCard from "./TodoCard";

// TODO: make this generic list render comonent
export default function ViewTodos() {
  const { sortedTodos: list } = React.useContext(TodoContext);

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {list.map((item) => (
        <TodoCard key={item.id} item={item} />
      ))}
    </div>
  );
}
