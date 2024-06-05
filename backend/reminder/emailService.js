import nodemailer from 'nodemailer';
import { getUserData } from './getTasks.js';

async function emailService(email,task) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tarun.jgs@gmail.com',
            pass: 'vnsa lwrh rfgl ywsg'
        }
    })

    const mailOptions = {
        from: {
            name: 'ListIt',
            address: 'tarun.jgs@gmail.com',
        },
        to: email,
        subject: 'Hi! This is a reminder to complete your task',
        text: `Make sure to complete your tasks. ${task.name}`,
    };
    await transporter.sendMail(mailOptions);
    console.log('sent');
}
// emailService(getUserData.email,task);

const send=async (task)=>{
    console.log(task+'task');
    const user = await getUserData();
    await emailService(user.user.email,task);
}

export default send;
