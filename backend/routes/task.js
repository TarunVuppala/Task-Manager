import express from 'express';
const app = express();
import moment from 'moment-timezone';
import Tasks from '../models/taskSchema.js';
import Users from '../models/userSchema.js';

app.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const user=await Users.findOne({_id:id});
    const tasks = await Tasks.find({ userRef: user._id });
    res.status(200).json({ tasks, success: true });
})

app.post('/', async (req, res) => {
    try {
        const { title, description, tag, date, priority: rawPriority, recurring } = req.body;

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
        const createdDate = moment().tz('Asia/Kolkata');        
        const newTask = await Tasks.create({
            title,
            description,
            tag:tag?tag:"General",
            date: createdDate,
            priority,
            completed: false,
            recurring,
            userRef: req.session.userId
        });
        if(date){
            console.log(date);
            const ist=moment.tz(date,'Asia/Kolkata').toDate();
            console.log(ist);
            newTask.reminder=ist;
            await newTask.save();
        }

        const user = await Users.findOne({ _id: req.session.userId });
        user.tasksRef.push(newTask._id);
        await user.save();

        res.status(200).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task', error: error.message });
        console.log(error);
    }
});

app.delete('/:id', async (req, res) => {
    const id=req.params.id;
    console.log(id);
    const deletedTask=await Tasks.findByIdAndDelete(id);
    if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }
    const user = await Users.findOne({_id:deletedTask.userRef});
    user.tasksRef.pull(id);
    await user.save();
    res.status(200).json({ message: 'Task deleted successfully', success: true });
});

app.put('/:id',async (req,res)=>{
    const id=req.params.id;
    const task=await Tasks.findById(id);
    task.completed=!task.completed;
    await task.save();
    res.status(200).json({message:'Task updated successfully',success:true});
})

export default app;