import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
   
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date());

  // ✅ Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ✅ Update clock every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Add Task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  // Toggle Complete
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Clear All
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: "5px" }}>Todo List</h1>
      <div style={styles.clock}>
        {time.toLocaleDateString()} - {time.toLocaleTimeString()}
      </div>

      {/* Input area */}
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          style={styles.input}
          // ✅ Add task on Enter key press
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <div key={index} style={styles.task}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => toggleComplete(index)}
                style={{ ...styles.icon, color: "green" }}
              >
                ✔
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={{ ...styles.icon, color: "red" }}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Clear All Button */}
      {tasks.length > 0 && (
        <button onClick={clearAll} style={styles.clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

// Styles
const styles = {
  container: {
    textAlign: "center",
    width: "350px",
    margin: "auto",
    marginTop: "50px",
    background: "#d94195ff",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  clock: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  inputArea: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },
  addBtn: {
    marginLeft: "10px",
    padding: "10px 20px",
    background: "#4da6ff",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  task: {
    background: "white",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "20px",
  },
  icon: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    marginLeft: "5px",
  },
  clearAll: {
    marginTop: "15px",
    background: "red",
    border: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
