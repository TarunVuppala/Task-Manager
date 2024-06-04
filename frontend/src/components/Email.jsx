import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useUser } from '../context/UserContext';

function Email(){
    const {user} = useUser();
    const [emailData, setEmailData] = useState({
        to_name: user.name,
        to_email: user.email,
        message: 'This is a test message.'
    });

    const handleEmailSend = (e) => {
        e.preventDefault();
        emailjs.send('service_cp18skf','template_1pw2qvh',emailData,'jcncpH9qM7QZ-5pIT')
        .then((response)=>console.log(response))

    }

    return(
        <>
            <button onClick={handleEmailSend}>Send Email</button>
        </>
    )
}

export default Email;