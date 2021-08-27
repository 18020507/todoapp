import React from "react";

import "./todo-form.css";

function TodoForm({
  description,
  setDescription,
  dueDate,
  setDueDate,
  priority,
  setPriority,
}) {
  return (
    <div className="todo-form-container">
      <div>
        <div className="description-title">Description</div>
        <textarea
          className="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="option">
        <div className="due-date-option">
          <div className="due-date">Due Date</div>
          <input
            type="date"
            className="due-date-input"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>
        <div className="priority-option">
          <div className="priority">Priority</div>
          <select
            className="select-input"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
