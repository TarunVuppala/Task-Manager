import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  }

  const handleNotesOpen = () => {
    setNotesOpen(!notesOpen);
  }

  return (
    <Router>
      <div className='flex justify-center items-center h-screen'>

        <Routes>
          <Route path='/' element={
            <div className='flex flex-row w-full'>
              <Sidebar />
              <div className='p-10 w-full'>
                <Navbar handleFormOpen={handleFormOpen} />
                <TasksPage formOpen={formOpen} />
              </div>
            </div>} 
          />

          <Route path='/notes' element={
            <div className='flex flex-row w-full'>
              <Sidebar />
              <div className='p-10 w-full'>
                <Navbar handleFormOpen={handleNotesOpen} />
                {notesOpen ? <NoteForm /> : <NotesPage />}
              </div>
            </div>} 
          />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
