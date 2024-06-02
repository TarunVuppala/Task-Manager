import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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
  const [auth, setAuth] = useState(false);

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
        setAuth(data.success);
      })
      .catch(() => {
        setAuth(false);
      });
  }, [auth]);
  console.log(auth+" 47");

  const handleLogout = () => {
    setAuth(false);
  };

  const handleLogin=()=>{
    setAuth(true);
  }

  return (
    <Router>
      <div className='flex flex-row h-screen'>
        <Routes>
          <Route
            path='/'
            element={
              auth ? (
                <div className='flex flex-row w-full'>
                  {auth}
                  <Sidebar onLogout={handleLogout} />
                  <div className='p-10 w-full'>
                    <Navbar handleFormOpen={handleFormOpen} />
                    <TasksPage formOpen={formOpen} />
                  </div>
                </div>
              ) : (
                <>
                {auth?1:0}
                <Navigate to='/login' />
                </>
              )
            }
          />
          <Route
            path='/notes'
            element={
              auth ? (
                <div className='flex flex-row'>
                  <Sidebar onLogout={handleLogout} />
                  <div className='p-10'>
                    <Navbar handleFormOpen={handleNotesOpen} />
                    {notesOpen ? <NoteForm /> : <NotesPage />}
                  </div>
                </div>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route path='/login'element={<Login auth={auth} handleLogin={handleLogin}/>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
