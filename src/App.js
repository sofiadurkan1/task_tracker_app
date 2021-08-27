import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Feb 5th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Feb 6th at 1:30pm",
      isDone: false,
    },
    {
      id: 3,
      text: "Attend in-Class",
      day: "Feb 7th at 20:00pm",
      isDone: false,
    },
  ]);
  //Add task
  const addTask = () => {
    console.log(addTask);
  };

  //Delete tasks

  const deleteTask = (deleteTaskId) => {
    console.log("delete", deleteTaskId);
    setTasks(tasks.filter((task) => task.id !== deleteTaskId));
  };

  //toggle done

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
