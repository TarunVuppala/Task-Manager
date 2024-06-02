import React from "react";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Sidebar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch("http://localhost:5000/logout", {
            method: "GET",
            credentials: "include"
        });
        const data = await response.json();
        if (data.success) {
            onLogout();
            navigate("/login");
        }
    };

    return (
        <div className='h-screen w-[500px] border-r'>
            <div className='flex flex-col justify-between items-center'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>

                <div className='flex w-full h-[1px] bg-black'></div>
                
                <button 
                    className="bg-[#F04D23] text-white py-2 px-12 font-bold rounded-[20px]"
                    onClick={handleLogout}
                >
                    LOGOUT
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
