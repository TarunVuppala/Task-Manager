import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

function ProfileCard({ onLogout }) {
  const { user, setUser } = useUser();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const fetchUser = async () => {
    const response = await fetch('http://localhost:5000/login');
    const data = await response.json();
    if (data.success) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  if (!user) {
    fetchUser();
  }
  
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
    <div className='w-full h-fit flex flex-row items-center rounded-full p-3 justify-between '>
      <div className='flex flex-row justify-center items-center gap-3'>
        <img src="/images/profile.jpg" alt="profile" className='rounded-full w-[50px] h-[50px]' />
        <div>Hi {user ? user.username : 'User'}!</div>
      </div>
      <div className='flex flex-row justify-center gap-2'>
        <button className='border w-[50px] h-[50px] rounded-full' onClick={toggleTheme}>
          <ContrastIcon />
        </button>
        <button onClick={handleLogout} className='border w-[50px] h-[50px] rounded-full'>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
