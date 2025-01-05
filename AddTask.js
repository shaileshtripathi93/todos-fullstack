import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className='px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>Add</button>
    </form>
  );
};

export default AddTask;
