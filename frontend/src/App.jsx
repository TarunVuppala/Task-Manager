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
  const [user,setUser]=useState();

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

  const handleLogout = () => {
    setUser(null);
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
                <div className='flex flex-row w-full dark:bg-[#0e1b2b] dark:text-[#e1e1e1] duration-1000'>
                  {auth}
                  <Sidebar onLogout={handleLogout} username={user.username}/>
                  <div className='p-10 w-full'>
                    <Navbar handleFormOpen={handleFormOpen} />
                    <TasksPage user={user} formOpen={formOpen} handleFormOpen={handleFormOpen}/>
                  </div>
                </div>
              ) : (
                <>
                <Navigate to='/login' />
                </>
              )
            }
          />
          <Route
            path='/notes'
            element={
              auth ? (
                <div className='flex flex-row w-full dark:bg-[#0e1b2b] dark:text-[#e1e1e1] duration-1000'>
                  <Sidebar onLogout={handleLogout} user={user.username}/>
                  <div className='p-10 w-full'>
                    <Navbar handleFormOpen={handleNotesOpen} />
                    {notesOpen ? <NoteForm /> : <NotesPage />}
                  </div>
                </div>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route path='/login'element={
            <div className='flex justify-center items-center w-full'>
              <Login auth={auth} handleLogin={handleLogin} setUser={setUser}/>
            </div>
          } />
          <Route path='/signup' element={
            <div className='flex justify-center items-center w-full'>
              <SignUp />
          </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
