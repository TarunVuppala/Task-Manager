import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function Email() {
    const { user } = useUser();

    const handleEmailSend = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/email/${user._id}`, {
            method: 'POST'
        }
        );
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <button onClick={handleEmailSend}>Send Email</button>
        </>
    )
}

export default Email;