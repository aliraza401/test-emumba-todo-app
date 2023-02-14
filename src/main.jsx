import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoContext from "./context/todo-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </React.StrictMode>
);
