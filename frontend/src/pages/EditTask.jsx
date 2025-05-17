import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditTask({ user }) {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '',
    status: 'Pending',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        setTask({
          title: data.title,
          description: data.description,
          deadline: data.deadline.split('T')[0],
          assignedTo: data.assignedTo,
          status: data.status,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then(() => navigate('/tasks'));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-gray-900">
      <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-2xl p-8 m-2 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6 dark:text-gray-200 text-gray-900">
          Edit Task
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg dark:text-gray-300">Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task Title"
              className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-200 dark:border-gray-600 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition transform hover:scale-105 duration-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg dark:text-gray-300">Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-200 dark:border-gray-600 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition transform hover:scale-105 duration-300"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg dark:text-gray-300">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={task.deadline}
              onChange={handleChange}
              className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-200 dark:border-gray-600 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition transform hover:scale-105 duration-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg dark:text-gray-300">Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
              placeholder="Assignee's Name"
              className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-200 dark:border-gray-600 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition transform hover:scale-105 duration-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg dark:text-gray-300">Status</label>
            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-200 dark:border-gray-600 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-purple-500 transition transform hover:scale-105 duration-300"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
