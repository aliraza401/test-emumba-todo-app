import React from "react";
import "./assets/styles/style.css";

import AddTodo from "./components/AddTodo";
import SortFilter from "./components/SortFilter";
import Button from "./components/ui/Button";
import ViewTodos from "./components/ViewTodos";

function App() {
  const [shouldShowAddTodoButton, setShouldShowAddTodoButton] =
    React.useState(false);

  return (
    <div className="container mx-auto text-center mt-5">
      {shouldShowAddTodoButton ? (
        <AddTodo onClose={() => setShouldShowAddTodoButton(false)} />
      ) : (
        <Button onClick={() => setShouldShowAddTodoButton(true)}>
          Add Todo
        </Button>
      )}

      <SortFilter />
      <ViewTodos />
    </div>
  );
}

export default App;
