import React from 'react'
function login(){
    return(
    <>
    <div className="">
    <button className={`${activeTab === "Task Board" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black  rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Task Board")}>
          Task Board
        </button>

        <button className={`${activeTab === "Notes" ? "bg-[#F04D23] text-white" : "border border-[#F04D23] text-black"} py-4 font-black  rounded-[20px] px-[50px]`} onClick={() => setActiveTab("Notes")}>
          Notes
        </button>
    </div>
    </>
    );
}