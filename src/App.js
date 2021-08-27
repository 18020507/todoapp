import React, { useState, useEffect } from "react";
import short from "short-uuid";

import "./App.css";
import NewTask from "./components/new-task/new-task";
import TodoList from "./components/todo-list/todo-list";
import BulkAction from "./components/todo-list/bulk-action/bulk-action";

// const task = {
//   title: '',
//   description: '',
//   dueDate: new Date(),
//   priority: '',
// }

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    const parsedTasks = JSON.parse(localStorage.getItem("tasks") || []);
    setTasks(parsedTasks);
  }, []);

  useEffect(() => {
    const stringifiedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", stringifiedTasks);
  }, [tasks]);

  const _handleAddTask = (title, description, dueDate, priority) => {
    const newTask = {
      title,
      description,
      dueDate,
      priority,
      id: short.generate(),
    };
    const currentTasks = [...tasks];
    currentTasks.push(newTask);
    setTasks(currentTasks);
  };

  const _handleRemoveTask = (...taskIds) => {
    setTasks(tasks.filter((task) => !taskIds.includes(task.id)));
  };

  const _handleUpdateTask = (taskId, newTask) => {
    console.info(taskId);
    const index = tasks.findIndex((task) => task.id === taskId);
    tasks[index] = { ...newTask, id: taskId };
    setTasks([...tasks]);
    console.info(tasks);
  };

  return (
    <div>
      <div className="app-title">TODO LIST APP</div>
      <div className="container">
        <div className="new-task-grid-container grid-container">
          <NewTask handleAddTask={_handleAddTask} />
        </div>
        <div className="todo-list-grid-container grid-container">
          <TodoList
            tasks={tasks}
            handleRemoveTask={_handleRemoveTask}
            selectedTasks={selectedTasks}
            setSelectedTasks={setSelectedTasks}
            handleUpdateTask={_handleUpdateTask}
          />
          {selectedTasks.length !== 0 && (
            <BulkAction
              selectedTasks={selectedTasks}
              setSelectedTasks={setSelectedTasks}
              handleRemoveTask={_handleRemoveTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
