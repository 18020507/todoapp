import React, {useState} from "react";

import BulkAction from "./bulk-action/bulk-action";
import TodoItem from "./todo-item/todo-item.js";
import "./todo-list.css";

function TodoList({
  tasks,
  selectedTasks,
  setSelectedTasks,
  handleRemoveTask,
  handleUpdateTask,
}) {
  const [search, setSearch] = useState('');

  return (
    <div className="todo-list-container">
      <div className="title">To Do List</div>
      <input className="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
      {tasks.filter(task => task.title.includes(search)).map((task) => (
        <TodoItem
          task={task}
          handleRemoveTask={handleRemoveTask}
          selectedTasks={selectedTasks}
          setSelectedTasks={setSelectedTasks}
          selected={selectedTasks.indexOf(task.id) > -1}
          handleUpdateTask={handleUpdateTask}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
