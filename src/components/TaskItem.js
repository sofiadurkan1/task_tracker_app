import React from 'react'

function TaskItem({task}) {
    return (
        <div className="task">
             {task.text}
        </div>
    )
}

export default TaskItem;
