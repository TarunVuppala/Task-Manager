const express = require('express');
const app = express();

const Task = require('../models/taskSchema');
const Users=require('../models/userSchema');
app.post('/', async (req, res) => {
    try {
        const { title, description, tag, date, priority: rawPriority, frequency } = req.body;

        let priority = rawPriority || "Medium";
        switch (priority.toLowerCase()) {
            case 'now':
                priority = "High";
                break;
            case 'soon':
                priority = "Medium";
                break;
            case 'later':
                priority = "Low";
                break;
        }

        const newTask = await Task.create({
            title,
            description,
            tag,
            date,
            priority,
            recurring: frequency,
            userRef:req.session.userId
        });
        const user=await Users.findOne({_id:req.session.userId});
        user.tasksRef.push(newTask._id);
        await user.save();

        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task', error: error.message });
    }
});

module.exports = app;