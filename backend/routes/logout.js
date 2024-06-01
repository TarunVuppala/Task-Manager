const express = require("express");
const app=express();

app.get("/", function(req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.clearCookie("connect.sid");
        res.redirect("/login");
    });
});

module.exports=app;