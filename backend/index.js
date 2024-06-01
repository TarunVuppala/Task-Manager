const express = require("express");
const mongoose = require("mongoose");
const session=require('express-session')
const cors = require("cors");

const app = express();

const login = require('./routes/login');
const signup = require('./routes/signup');

mongoose.connect('mongodb+srv://tarunvuppala26:tarun26@cluster0.sobucbc.mongodb.net/task-manager')
.then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
})

app.use(cors());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/login',login);
app.use('/signup',signup);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(5000);