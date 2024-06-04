import express from 'express';
const app = express();
import Users from '../models/userSchema.js';
import Events from '../models/eventSchema.js'

app.post('/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    const { title, date } = req.body;
    const utc = new Date(date);
    const ist = new Date(utc.getTime() + (5.5 * 60 * 60 * 1000));

    const event = await Events.create({
        title,
        date:ist
    });
    user.eventsRef.push(event._id);
    await user.save();
    res.status(200).json({ event, success: true });
})

export default app;