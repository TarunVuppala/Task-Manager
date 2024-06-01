import React from "react";

function Sidebar() {
    return (
        <div className='flex flex-row justify-between items-center w-[40%] shadow-xl rounded-[20px] bg-[#e1e1e1] h-[90%]'>
            <div className='flex flex-col justify-between items-center p-6'>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                <div className='flex w-full h-[1px] bg-black'></div>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                
                <button className="bg-[#F04D23] text-white mb-4 text-black py-2 px-12 font-bold rounded-[20px]">
                    LOGOUT
                </button>
            </div>
        </div>
    )
};

export default Sidebar;