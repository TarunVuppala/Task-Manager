import React from "react";

function Sidebar() {
    return (
        <div className='h-screen w-[500px] border-r'>
            <div className='flex flex-col justify-between items-center'>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                <div className='flex w-full h-[1px] bg-black'></div>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                
                <button className="bg-[#F04D23] text-white py-2 px-12 font-bold rounded-[20px]">
                    LOGOUT
                </button>
            </div>
        </div>
    )
};

export default Sidebar;