import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleOpen }) => {
  const [activeTab, setActiveTab] = useState("Task Board");
  const [quote, setQuote] = useState('');
  // const firstrender = useRef(true);

  useEffect(() => {
    // if (firstrender.current) {

    const time = setInterval(() => {
      fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQuote(data.content));

    }, 10000);

    return () => clearInterval(time);

    // firstrender.current = false;
    // }
  }
    , []);

  return (
    <div className='flex flex-col gap-2'>

      <div className='flex flex-row gap-5 w-fit h-[50px]'>
        <button className='bg-[#F04D23] px-5 py-4 rounded-[20px]' onClick={handleOpen}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.136 9.864H10.056V16.344H6.472V9.864H0.424V6.648H6.472V0.184H10.056V6.648H16.136V9.864Z" fill="white" />
          </svg>
        </button>

        <Link to='/' className={`${activeTab === "Task Board" ? "bg-[#F04D23] text-white " : "border border-[#F04D23] text-black dark:text-white"} w-[140px] h-[50px] rounded-[20px] flex justify-center items-center font-black`} onClick={() => setActiveTab("Task Board")}>
          Task Board
        </Link>

        <Link to='/notes' className={`${activeTab === "Notes" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black dark:text-white"} w-[140px] h-[50px] rounded-[20px] flex justify-center items-center font-black`} onClick={() => setActiveTab("Notes")}>
          Notes
        </Link>
      </div>
      <blockquote className='flex flex-col justify-center items-center text-center p-5'>{quote}</blockquote>

    </div>
  );
}

export default Navbar;
