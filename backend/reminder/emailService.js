import nodemailer from 'nodemailer';
import { getUserData } from './getTasks.js';

async function emailService(email, task) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tarun.jgs@gmail.com',
            pass: 'vnsa lwrh rfgl ywsg'
        }
    });

    const mailOptions = {
        from: {
            name: 'ListIt',
            address: 'tarun.jgs@gmail.com',
        },
        to: email,
        subject: 'Hi! This is a reminder to complete your task',
        text: `Make sure to complete this task: ${task.title}.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// emailService(getUserData.email,task);

const send = async (task) => {
    // console.log(task);
    const user = await getUserData();
    // if(!user.user) return
    await emailService(user.user.email, task);
}

// send({name:'task'})
export default send;
