import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study React Pre-Class Notes',
      day: 'Feb 5th at 2:30pm',
      isDone: false,
    },
    {
      id: 2,
      text: 'Feed the Dog',
      day: 'Feb 6th at 1:30pm',
      isDone: false,
    },
    {
      id: 3,
      text: 'Attend in-Class',
      day: 'Feb 7th at 20:00pm',
      isDone: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  //CRUD
  //Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete tasks
  const deleteTask = (deleteTaskId) => {
    console.log('delete', deleteTaskId);
    setTasks(tasks.filter((task) => task.id !== deleteTaskId));
  };

  //Toggle Done
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  //Toggle show and hide
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        toggleShow={toggleShow}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p>"No Tasks to Show"</p>
      )}
    </div>
  );
}

export default App;