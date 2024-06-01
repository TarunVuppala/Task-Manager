import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteForm from './Notes/NoteForm';


function App() {
  return (
    <>
      <div className='flex flex-row justify-between items-center h-screen'>
        <div className='w-[50%] flex flex-col justify-between items-center'>
          <div>Left Top</div>
          <div className='w-[90%] h-[1px] bg-black'></div>
          <div>Left Bottom</div>
        </div>

        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          <Route path='/note' element={<NoteForm/>}/>
          </Routes>
        </Router>
      </div>

    </>

  );
}

export default App;