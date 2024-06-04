import express from 'express';
import User from '../models/userSchema.js';
const app = express();

app.get('/',async(req,res)=>{
    const user=await User.findOne({_id:req.session.userId});
    res.json({user});
})

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
    req.session.userId=user._id;
    res.status(200).json({ user, success: true });
});

export default app;