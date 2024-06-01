import React from "react";

function Sidebar() {
    return (
        <>
            <div className='flex flex-row justify-between items-center h-screen'>
                <div className='w-[50%] flex flex-col justify-between items-center'>
                    <div>Left Top</div>
                    <div className='w-[90%] h-[1px] bg-black'></div>
                    <div>Left Bottom</div>
                </div>
                <div className='w-[1px] h-screen bg-black'></div>
            </div>
        </>
    )
};

export default Sidebar;