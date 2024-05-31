import React, { useState } from 'react';

import './App.css';
import Form from './TaskBoard/Form';
import Navbar from './components/Navbar';
function App() {
  const [formOpen, setFormOpen] = useState(false);
  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  }

  return (
    <div className='flex flex-row justify-between items-center h-screen'>

      <div className='w-[50%] flex flex-col justify-between items-center'>
        <div>Left Top</div>
        <div className='w-[90%] h-[1px] bg-black'></div>
        <div>Left Bottom</div>
      </div>

      <div className='w-[1px] h-screen bg-black'></div>

      <div className='w-full flex flex-col justify-between items-center'>
        <Navbar handleFormOpen={handleFormOpen} />
      </div>
      <div className='w-[1px] h-screen bg-black'></div>

      {formOpen &&
        <div className='w-[50%] flex flex-col justify-between items-center'>
          <Form />
        </div>
      }
    </div>
  );
}

export default App;