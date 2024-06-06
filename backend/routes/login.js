import express from 'express';
import Users from '../models/userSchema.js';
const app = express();
let id;

app.get('/',async(req,res)=>{
    // console.log(`${req.session.userId} this is user id`);
    if(!id) return
    const user=await Users.findOne({_id:id});
    // console.log(`${user}`);
    // console.log('this is user');
    res.status(200).json({ user, success: true });
})

app.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ username: username });
    if (!user) {
        res.status(404).json({ err: "user not found" });
        return;
    }
    if (password !== user.password) {
        res.status(404).json({ err: "password not matched" });
        return;
    }
    req.session.userId=user._id;
    id=user._id;
    // console.log(`${req.session.userId} this is user id`);
    res.status(200).json({ user, success: true });
});

export default app;