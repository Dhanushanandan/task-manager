import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { jsPDF } from 'jspdf';

function TaskList({ user, setUser }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [sortBy, setSortBy] = useState('deadline');

  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks?search=${search}&status=${status}&sortBy=${sortBy}`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setTasks(data));
  }, [search, status, sortBy]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(() => setTasks(tasks.filter(task => task._id !== id)));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Task Management Report', 10, 10);
    let y = 20;
    tasks.forEach((task, index) => {
      doc.text(
        `${index + 1}. ${task.title} - ${task.status} (Due: ${new Date(task.deadline).toLocaleDateString()})`,
        10,
        y
      );
      y += 10;
    });
    doc.save('tasks_report.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      {/* <Navbar user={user} setUser={setUser} /> */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold">Task List</h1>
          <div>
            <Link
              to="/tasks/add"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg mr-2 transition-all"
            >
              Add Task
            </Link>
            <button
              onClick={generatePDF}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-500 bg-gray-800 text-white p-2 rounded w-full sm:w-1/3"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-500 bg-gray-800 text-white p-2 rounded"
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-500 bg-gray-800 text-white p-2 rounded"
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        <div className="overflow-x-auto shadow-2xl rounded-lg">
          <table className="w-full bg-gray-800 rounded-lg text-white">
            <thead className="bg-gray-700 text-left text-sm uppercase tracking-wider">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Deadline</th>
                <th className="p-4">Assigned To</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task._id} className="border-b border-gray-600 hover:bg-gray-700">
                  <td className="p-4">{task.title}</td>
                  <td className="p-4">{task.status}</td>
                  <td className="p-4">{new Date(task.deadline).toLocaleDateString()}</td>
                  <td className="p-4">{task.assignedTo}</td>
                  <td className="p-4 flex gap-2">
                    <Link
                      to={`/tasks/edit/${task._id}`}
                      className="text-blue-400 hover:text-blue-600 underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="text-red-400 hover:text-red-600 underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {tasks.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-400">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
