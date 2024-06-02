const express = require("express");
const app = express();

app.post("/", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(400).json({ success: false, err: "Failed to logout" });
        } else {
            res.clearCookie("connect.sid");
            res.status(200).json({ success: true });
        }
    });
});

module.exports = app;
