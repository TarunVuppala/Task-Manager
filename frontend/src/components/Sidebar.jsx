import React from "react";
import ProfileCard from "./ProfileCard";
import Calendar from "./Calendar";
import ApexCharts from "./Charts";
import Charts from "./Charts";

function Sidebar({ onLogout }) {
    return (
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden max-md:hidden border-[#000] dark:border-[#292929]'>
            <Calendar />
            <Charts/>
            <ProfileCard onLogout={onLogout} />
        </div>
    );
}

export default Sidebar;
