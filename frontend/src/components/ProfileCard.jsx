import React from 'react'
import { useNavigate } from "react-router-dom";


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
        <div className=' w-full h-[200px] flex flex-col justify-center items-center border'>
            ProfileCard
            {/* <div className='flex flex-col justify-between items-center h-full p-6'>
                <button 
                    className="bg-[#F04D23] text-white py-2 px-12 font-bold rounded-[20px]"
                    onClick={handleLogout}
                >
                    LOGOUT
                </button>
            </div> */}
        </div>
    );
};

export default ProfileCard
