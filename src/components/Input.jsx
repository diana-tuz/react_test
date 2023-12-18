import { useState } from "react";

export const Input = ({ setList }) => {
  const [nameTask, setNameTask] = useState("");

  const addTask = () => {
    setList((tasks) => [...tasks, nameTask]);
    setNameTask('');
  };


  console.log("nameTask", nameTask);

  return (
    <div>
      <input
        type="text"
        placeholder="Add your task"
        onChange={(event) => setNameTask(event.target.value)}
        value={nameTask}
        // onKeyPress={}
      />

      <button type="button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};
