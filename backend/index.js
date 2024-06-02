const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const cors = require("cors");

const login = require('./routes/login');
const signup = require('./routes/signup');
const logout=require('./routes/logout');
const task = require('./routes/task');
const auth = require('./middleware/auth');

const app = express();

mongoose.connect('mongodb+srv://tarunvuppala26:tarun26@cluster0.sobucbc.mongodb.net/task-manager')
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', login);
app.use('/signup', signup);
app.use('/logout',logout);
app.use('/task', task);

app.get("/", auth, (req, res) => {
    res.json({ message: "hello", success: true });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
