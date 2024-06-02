import React from "react";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import StatsCard from "./StatsCard";

function Sidebar({ onLogout,user }) {
    return (
        <div className='h-screen w-[400px] border-r flex flex-col justify-between items-center p-6'>
            <CalendarCard></CalendarCard>
            <StatsCard></StatsCard>
            <ProfileCard onLogout={onLogout} user={user}></ProfileCard>
        </div>
    );
};

export default Sidebar;
