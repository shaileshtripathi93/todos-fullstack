import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const toggleComplete = async (task) => {
    const { data } = await updateTask(task._id, { completed: !task.completed });
    setTasks(tasks.map(t => (t._id === data._id ? data : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (<div>
    <h1 className='text-4xl font-bold text-blue-500 text-center '>To-Do App</h1>

      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={removeTask} />
    </div>
  );
};

export default App;
