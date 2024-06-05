import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';
import cron from 'node-cron';

import login from './routes/login.js';
import signup from './routes/signup.js';
import logout from './routes/logout.js';
import task from './routes/task.js';
import note from './routes/note.js';
import email from './/routes/email.js';
import calender from './routes/calender.js';
import auth from './middleware/auth.js';

import { getTasks } from './reminder/getTasks.js'
import send from './reminder/emailService.js'

const app = express();

mongoose.connect('mongodb+srv://tarunvuppala26:tarun26@cluster0.sobucbc.mongodb.net/task-manager')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB", err);
    });

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/task', task);
app.use('/note', note);
app.use('/email', email);
app.use('/calender', calender);

app.get("/", auth, async (req, res) => {
    // getTasks()
    //     .then((tasks) => {
    //         tasks.forEach((task) => {
    //             const reminder = new Date(task.reminder);
    //             const cronExpression = `${reminder.getMinutes()} ${reminder.getHours()} ${reminder.getDate()} ${reminder.getMonth() + 1} *`;

    //             const mails = cron.schedule(cronExpression, async () => {
    //                 await send(task);
    //             }, {
    //                 timezone: 'Asia/Kolkata'
    //             });

    //             mails.start();
    //         });
    //     })
    console.log("hello");
    getTasks();

    res.json({ message: "hello", success: true });
});

app.listen(5000);
