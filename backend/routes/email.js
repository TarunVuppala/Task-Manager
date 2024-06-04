import express from 'express';
import nodemailer from 'nodemailer';
import Users from '../models/userSchema.js';
const app = express();

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
app.post('/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);

    const mailOptions = {
        from: {
            name: 'ListIt',
            address: 'tarun.jgs@gmail.com',
        },
        to: user.email,
        subject: 'Hi Hello Shiv!',
        text: 'Ela uav'
    };
    await transporter.sendMail(mailOptions);
    console.log('sent');
    res.status(200).json({ success: true });
});

export default app;