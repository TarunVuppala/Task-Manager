import React, { useState } from 'react'


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Notes");
  


  return (
    <div className='w-full flex md:flex-col'>
      <div className='flex flex-row items-center w-[50%] justify-center gap-[21px]'>
        <button className='bg-[#F04D23] p-4  font-black text-white rounded-[20px]' onClick={alert("New Note Created")} >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.136 9.864H10.056V16.344H6.472V9.864H0.424V6.648H6.472V0.184H10.056V6.648H16.136V9.864Z" fill="white"/>
          </svg>
        </button>
        <button className={`${activeTab === "Task Board" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black  rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Task Board")}>
          Task Board
        </button>

        <button className={`${activeTab === "Notes" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black  rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Notes")}>
          Notes
        </button>
      </div>
    </div>
  )
}

export default Navbar