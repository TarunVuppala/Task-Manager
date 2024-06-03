import React from "react";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import StatsCard from "./StatsCard";

function Sidebar({ onLogout }) {
    return (
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden'>
            <CalendarCard></CalendarCard>
            <StatsCard></StatsCard>
            <ProfileCard onLogout={onLogout}></ProfileCard>
        </div>
    );
};

export default Sidebar;
