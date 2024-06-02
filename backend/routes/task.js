const express = require('express');
const app = express();

const Tasks = require('../models/taskSchema');
const Users = require('../models/userSchema');

app.use(express.json());

app.get('/',async (req,res)=>{
    console.log(req.session);
    const tasks = await Tasks.find({ userRef: req.session.userId });
    console.log(tasks);
    res.status(200).json({ tasks, success: true });
})

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
        const createdDate = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
        if(date){
            const utc = new Date(date);
            const ist = new Date(utc.getTime() + (5.5 * 60 * 60 * 1000));
        }

        const newTask = await Tasks.create({
            title,
            description,
            tag,
            date: createdDate,
            reminder:date? ist:null,
            priority,
            recurring: frequency,
            userRef: req.session.userId
        });
        const user = await Users.findOne({ _id: req.session.userId });
        user.tasksRef.push(newTask._id);
        await user.save();

        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task', error: error.message });
        console.log(error);
    }
});

module.exports = app;