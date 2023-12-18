import { useState } from "react";
import { Input } from "./Input";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [listTask, setListTask] = useState([]);
  return (
    <>
      <p>Todo List</p>
      <Input setList={setListTask} />
      <TodoList tasks={listTask} />
    </>
  );
};
