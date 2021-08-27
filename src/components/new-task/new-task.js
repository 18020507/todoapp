import React, { useState } from "react";
import TodoForm from "../../commons/todo-form/todo-form.js";
import "./new-task.css";

function NewTask({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().substring(0, 10));
  const [priority, setPriority] = useState('normal');

  return (
    <div className="new-task-container">
      <div className="title">New Task</div>
      <input
        className="add-new-task"
        placeholder="Add New Task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TodoForm
        description={description}
        setDescription={setDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        priority={priority}
        setPriority={setPriority}
      />
      <button className="add-button" onClick={() => handleAddTask(title, description, dueDate, priority)}>Add</button>
    </div>
  );
}

export default NewTask;
