import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => (
  <div className="task-item">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task)}
    />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.title}
    </span>
    <button onClick={() => deleteTask(task._id)}>Delete</button>
  </div>
);

export default TaskItem;
