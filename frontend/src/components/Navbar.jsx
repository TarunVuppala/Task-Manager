import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleFormOpen }) => {
  const [activeTab, setActiveTab] = useState("Task Board");

  return (
    <div className='flex gap-5 w-fit h-[40px]'>
      <button className='bg-[#F04D23] w-full h-full flex justify-center items-center font-black text-white rounded-[20px]' onClick={handleFormOpen}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.136 9.864H10.056V16.344H6.472V9.864H0.424V6.648H6.472V0.184H10.056V6.648H16.136V9.864Z" fill="white" />
        </svg>
      </button>
      
      <Link to='/' className={`${activeTab === "Task Board" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Task Board")}>
        Task Board
      </Link>

      <Link to='/notes' className={`${activeTab === "Notes" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Notes")}>
        Notes
      </Link>
    </div>
  );
}

export default Navbar;
