import React, {useState} from 'react'
import TaskItem from './TaskItem';

function Tasks() {
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
    
    return (
        <div>
           {tasks.map((task) => (
           <TaskItem key ={task.id} task ={task}/>))}
            
        </div>
    )
}

export default Tasks
