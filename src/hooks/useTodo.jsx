import React from "react";
import { v4 as uuid } from "uuid";

const initTodolist = JSON.parse(localStorage.getItem("todos")) || [];
const initSortProperty = "Recent";

export default function useTodo() {
  const [list, setList] = React.useState(initTodolist);
  const [sortProperty, setSortProperty] = React.useState(initSortProperty);

  const addTodo = (item) => {
    item.time = Date.now();
    item.id = uuid();
    setList([item, ...list]);
  };

  const deleteTodo = (todoId) =>
    setList(list.filter((item) => item.id !== todoId));

  React.useEffect(() => {
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const sortedTodos = React.useMemo(() => {
    if (sortProperty === "time") {
      return list.sort((a, b) => a.time - b.time);
    }
    return list.sort((a, b) => b.time - a.time);
  }, [sortProperty, list]);

  const setSort = (newVal) => setSortProperty(newVal);

  return { list, addTodo, sortedTodos, deleteTodo, setSort };
}
