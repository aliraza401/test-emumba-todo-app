import React from "react";
import { TodoContext } from "../context/todo-context";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Modal from "./ui/Modal";

export default function AddTodo({ onClose }) {
  const tilteInputRef = React.useRef(null);
  const { addTodo } = React.useContext(TodoContext);

  const handleTodoFormSubmit = (e) => {
    e.preventDefault();
    if (!tilteInputRef.current.value.length) return;
    addTodo({ title: tilteInputRef.current.value });
    onClose();
  };

  React.useLayoutEffect(() => tilteInputRef.current.focus(), []);

  return (
    <div>
      <Modal isOpened={true}>
        <form onSubmit={handleTodoFormSubmit}>
          <Input type="text" ref={tilteInputRef} />
          <div className="flex flex-wrap gap-2 mt-4">
            <Button type={"submit"}>Add Todo</Button>
            <Button onClick={onClose} type={"danger"}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
