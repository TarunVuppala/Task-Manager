import React from "react";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import StatsCard from "./StatsCard";

function Sidebar({ onLogout,user }) {
    return (
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll'>
            <CalendarCard></CalendarCard>
            <StatsCard></StatsCard>
            <ProfileCard onLogout={onLogout} user={user}></ProfileCard>
        </div>
    );
};

export default Sidebar;
