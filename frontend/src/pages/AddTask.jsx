import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '',
    status: 'Pending'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(() => navigate('/tasks'));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <div className="grid gap-8 w-full max-w-2xl">
        <section className="rounded-3xl w-full">
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
            <h1 className="text-4xl font-bold text-center dark:text-gray-300 text-gray-900 mb-6">
              Add New Task
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-lg dark:text-gray-300">Title</label>
                <input
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  type="text"
                  placeholder="Task title"
                  required
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg dark:text-gray-300">Description</label>
                <textarea
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  placeholder="Task description"
                  required
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-lg dark:text-gray-300">Deadline</label>
                <input
                  name="deadline"
                  value={task.deadline}
                  onChange={handleChange}
                  type="date"
                  required
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg dark:text-gray-300">Assigned To</label>
                <input
                  name="assignedTo"
                  value={task.assignedTo}
                  onChange={handleChange}
                  type="text"
                  placeholder="Assignee name"
                  required
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg dark:text-gray-300">Status</label>
                <select
                  name="status"
                  value={task.status}
                  onChange={handleChange}
                  className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Task
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddTask;
