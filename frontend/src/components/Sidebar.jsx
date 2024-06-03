import React from "react";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import StatsCard from "./StatsCard";
import Calendar from "./Calendar";


function Sidebar({ onLogout,username }) {
    return (
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden'>
            <Calendar/>
            <StatsCard></StatsCard>
            <ProfileCard onLogout={onLogout} username={username}></ProfileCard>
        </div>
    );
};

export default Sidebar;
