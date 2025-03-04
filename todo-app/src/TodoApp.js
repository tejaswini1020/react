import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Add Task
      </button>

      <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0", display: "flex", justifyContent: "center" }}>
            <span style={{ marginRight: "10px" }}>{task}</span>
            <button onClick={() => handleDeleteTask(index)} style={{ cursor: "pointer", background: "red", color: "white", border: "none", padding: "5px 10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
