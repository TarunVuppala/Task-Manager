import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';

import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TasksPage from './TaskBoard/TasksPage';
import NotesPage from './Notes/NotesPage';
import NoteForm from './Notes/NoteForm';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const { user, setUser } = useUser();
  const [auth, setAuth] = useState(false);
  const [noteAddDel, setNoteAddDel] = useState(0);
  

  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  };

  const handleNotesOpen = () => {
    setNotesOpen(!notesOpen);
  };

  useEffect(() => {
    fetch('http://localhost:5000/', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
          setAuth(true); // Set auth to true if user is authenticated
        } else {
          setAuth(false);
        }
      })
      .catch(() => {
        setAuth(false);
      });
  }, [setUser]);

  const handleLogout = () => {
    setUser(null);
    setAuth(false);
    localStorage.removeItem('user');
  };

  const handleLogin = () => {
    setAuth(true);
  };

  return (
    <Router>
      <div className='flex flex-row h-screen dark:bg-[#0b0c0e]'>
        <Routes>
          <Route
            path='/'
            element={
              auth ? (
                <div className='flex flex-row w-full dark:bg-[#0b0c0e] dark:text-[#e1e1e1] duration-1000'>
                  <Sidebar onLogout={handleLogout} username={user.username} />
                  <div className='p-10 w-full'>
                    <Navbar handleOpen={handleFormOpen} />
                    <TasksPage formOpen={formOpen} handleFormOpen={handleFormOpen} />
                  </div>
                </div>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/notes'
            element={
              auth ? (
                <div className='flex flex-row w-full dark:bg-[#0b0c0e] dark:text-[#e1e1e1] duration-1000'>
                  <Sidebar onLogout={handleLogout} user={user.username} />
                  <div className='p-10 w-full h-full'>
                    <Navbar handleOpen={handleNotesOpen} />
                    {notesOpen ? <NoteForm userId={user._id} handleNotesOpen={handleNotesOpen} noteAddDel={noteAddDel} setNoteAddDel={setNoteAddDel} /> : <NotesPage noteAddDel={noteAddDel} setNoteAddDel={setNoteAddDel} />}
                  </div>
                </div>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/login'
            element={
              <div className='flex justify-center items-center w-full'>
                <Login auth={auth} handleLogin={handleLogin} />
              </div>
            }
          />
          <Route
            path='/signup'
            element={
              <div className='flex justify-center items-center w-full'>
                <SignUp />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
