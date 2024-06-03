import React from "react";
import ProfileCard from "./ProfileCard";
import Calendar from "./Calendar"; // Only import once
import StatsCard from "./StatsCard";

function Sidebar({ onLogout }) {
    return (
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden max-md:hidden'>
            <Calendar />
            <StatsCard />
            <ProfileCard onLogout={onLogout} />
        </div>
    );
}

export default Sidebar;
