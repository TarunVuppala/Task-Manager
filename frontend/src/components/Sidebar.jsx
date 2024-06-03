import React from "react";
import ProfileCard from "./ProfileCard";
import Calendar from "./Calendar";
import StatsCard from "./StatsCard";
import Calendar from "./Calendar";

function Sidebar({ onLogout }) {
    return (
<<<<<<< Updated upstream
        <div className='h-screen w-fit border-r flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden'>
            <Calendar/>
=======
        <div className='h-screen w-fit border-r border-[#272727] flex flex-col justify-between items-center p-6 overflow-y-scroll overflow-x-hidden max-md:hidden customscroll'>
            <Calendar></Calendar>
>>>>>>> Stashed changes
            <StatsCard></StatsCard>
            <ProfileCard onLogout={onLogout}></ProfileCard>
        </div>
    );
};

export default Sidebar;
