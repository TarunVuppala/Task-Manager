import React from "react";

function Sidebar() {
    return (
        <div className='flex flex-row justify-between items-center h-screen w-[40%]'>
            <div className='flex flex-col justify-between items-center p-6'>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                <div className='flex w-full h-[1px] bg-black'></div>
                <div className="border my-8">Lefrtwgefnrehtgsfwdhntyergefhntyrgseft Top</div>
                
            </div>
            <div className='w-[1px] h-screen bg-black'></div>
        </div>
    )
};

export default Sidebar;