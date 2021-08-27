import React, { useState } from "react";
import TodoForm from "../../../commons/todo-form/todo-form.js";
import "./todo-item.css";

function TodoItem({
  task,
  selectedTasks,
  setSelectedTasks,
  handleRemoveTask,
  handleUpdateTask,
  selected,
}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const _handleSelectTask = (taskId) => {
    if (selected) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      const temp = [...selectedTasks, taskId];
      setSelectedTasks(temp);
    }
  };

  const _onUpdateClick = () => {
    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };
    handleUpdateTask(task.id, newTask);
  };

  const renderForm = (task) => (
    <div className="detail-container">
      <div className="content">
        <input
          placeholder="abc"
          className="detail-name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TodoForm
          title={title}
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          priority={priority}
          setPriority={setPriority}
        />
        <button className="button-update" onClick={() => _onUpdateClick()}>
          Update
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="todo-item-container">
        <input
          type="checkbox"
          className="todo-item-checkbox"
          onChange={(event) => _handleSelectTask(task.id)}
          checked={selected}
        />
        <div className="title">{task.title}</div>
        <div className="spacer" />
        <button className="detail-button" onClick={() => setShow(!show)}>
          Detail
        </button>
        <button
          className="remove-button"
          onClick={() => handleRemoveTask(task.id)}
        >
          Remove
        </button>
      </div>
      {show && renderForm(task)}
    </div>
  );
}

export default TodoItem;
