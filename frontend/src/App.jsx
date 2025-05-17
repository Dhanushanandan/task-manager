import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import NotFound from './pages/NotFound';

function AppContent({ user, setUser }) {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/login'];

  return (
    <>
      {/* Render Navbar only if current path is not in hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar user={user} setUser={setUser} />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="/tasks" element={user ? <TaskList user={user} /> : <Navigate to="/login" />} />
        <Route path="/tasks/add" element={user ? <AddTask user={user} /> : <Navigate to="/login" />} />
        <Route path="/tasks/edit/:id" element={user ? <EditTask user={user} /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/auth/user', { credentials: 'include' })
      .then(res => {
        if (!res.ok) {
          setUser(null);
          return Promise.reject('Unauthorized');
        }
        return res.json();
      })
      .then(data => {
        setUser(data.user || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Auth check error:', err);
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
}

export default App;
