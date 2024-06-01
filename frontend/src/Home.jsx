import React, { useState } from 'react';

import Form from './TaskBoard/Form';
import Navbar from './components/Navbar';

function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  }

  return (
    <>
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
    </>

  );
}

export default Home;