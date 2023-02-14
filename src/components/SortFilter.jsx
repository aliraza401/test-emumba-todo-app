import React from "react";
import { TodoContext } from "../context/todo-context";

export default function SortFilter() {
  const { setSort } = React.useContext(TodoContext);

  return (
    <select
      onChange={(event) => setSort(event.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mt-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-auto px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option defaultValue value={"recent"}>
        Recent
      </option>
      <option value="time">By Time</option>
    </select>
  );
}
