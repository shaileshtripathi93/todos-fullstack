import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <div className="task-list">
    {tasks.map(task => (
      <TaskItem
        key={task._id}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    ))}
  </div>
);

export default TaskList;
