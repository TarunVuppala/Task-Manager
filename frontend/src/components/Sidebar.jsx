import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import Calendar from './Calendar';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart1';

function Sidebar({ onLogout }) {
  const [selectedDate, setSelectedDate] = useState(null);
  
  return (
    <div className="h-screen w-[500px] border-r flex flex-col justify-between items-center p-10 overflow-y-scroll overflow-x-hidden max-md:hidden border-[#000] dark:border-[#292929]">
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="w-full mt-5">
        <DoughnutChart selectedDate={selectedDate} />
        <LineChart selectedDate={selectedDate} />
      </div>
      <ProfileCard onLogout={onLogout} />
    </div>
  );
}

export default Sidebar;
