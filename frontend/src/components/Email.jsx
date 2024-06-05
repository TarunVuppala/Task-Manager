import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

function Email({task}) {
    const { user } = useUser();

    const handleEmailSend = async (task) => {
        const response = await fetch(`http://localhost:5000/email/${user._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task}),
            credentials: 'include'
        }
        );
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <button onClick={()=>{handleEmailSend(task)}}><NotificationAddIcon className='text-[#F04D23]'></NotificationAddIcon></button>
        </>
    )
}
export default Email;