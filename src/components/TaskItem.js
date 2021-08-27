
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TaskItem = ({ task, deleteTask, toggleDone }) => {
  return (
    <div
      className={task.isDone ? 'task done' : 'task'}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default TaskItem;