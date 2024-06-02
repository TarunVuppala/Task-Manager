import React from 'react'
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import ContrastIcon from '@mui/icons-material/Contrast';

function ProfileCard({ onLogout }) {
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
        <div className=' w-full h-fit flex flex-row items-center rounded-full p-3 justify-between'>
            <div className='flex flex-row justify-center items-center gap-3'>
                <img src="/images/profile.jpg" alt="profile"
                className='rounded-full w-[50px] h-[50px]'
                />
                <div>Hi Madhav!</div>
            </div>

            <div className='flex flex-row justify-center gap-2'>
                <button className='border w-[50px] h-[50px] rounded-full'>
                    <ContrastIcon></ContrastIcon>
                </button>
                <button onClick={handleLogout} className='border w-[50px] h-[50px] rounded-full'>
                    <LogoutIcon></LogoutIcon>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard