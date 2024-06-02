const express = require("express");
const app = express();
const User = require('../models/userSchema');

app.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
        res.status(404).json({ err: "user not found" });
        return;
    }
    if (password !== user.password) {
        res.status(404).json({ err: "password not matched" });
        return;
    }
    req.session.username = username;
    req.session.userId = user._id;

    res.status(200).json({ user, success: true });
});

module.exports = app;
