import express from 'express';
const app = express();

app.get("/", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "Failed to logout" });
        }
        res.clearCookie("connect.sid");
        res.status(200).json({ success: true, message: "Logged out" });
    });
});

export default app;