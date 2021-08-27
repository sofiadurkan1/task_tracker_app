import React, {useState} from 'react'
import TaskItem from './TaskItem';

function Tasks({tasks,deleteTask}) {
   
    
    return (
        <div>
           {tasks.map((task) => (
           <TaskItem key ={task.id} task ={task} deleteTask={deleteTask}/>))}
            
        </div>
    )
}

export default Tasks
