import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteForm from './Notes/NoteForm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/note' element={<NoteForm/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;