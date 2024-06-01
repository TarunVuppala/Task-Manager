import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TasksPage from './TaskBoard/TasksPage';
import NotesPage from './Notes/NotesPage';
import Form from './TaskBoard/Form';
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
      <div className='flex flex-row justify-between items-center h-screen'>

        <Routes>
          <Route path='/' element={
            <>
              <Sidebar />
              <Navbar handleFormOpen={handleFormOpen} />
              <TasksPage formOpen={formOpen}/>
            </>
          } />
          <Route path='/notes' element={
            <>
              <Sidebar />
              <Navbar handleFormOpen={handleNotesOpen} />
              {notesOpen?<Form />:<NotesPage/>}
            </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
