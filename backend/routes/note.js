import express from 'express';
const app = express();
import Notes from'../models/noteSchema.js';
import Users from'../models/userSchema.js';

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await Users.findById(id);
    const notes = await Notes.find({ userRef: user._id });
    res.status(200).json({ notes, success: true });
});

app.post('/:id', async (req, res) => {
    const id = req.params.id;
    
    const { heading, description,tag } = req.body;
    // console.log(req.body);
    const user = await Users.findById(id);
    // console.log(user);
    const newNote = await Notes.create({
        heading,
        note:description,
        tag,
        userRef: user._id
    });
    user.notesRef.push(newNote._id);
    await user.save();
    res.status(200).json({ newNote, success: true });
});

app.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    const deletedNote=await Notes.findByIdAndDelete(id);
    if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
    }
    const user = await Users.findOne({_id:deletedNote.userRef});
    user.notesRef.pull(id);
    await user.save();
    res.status(200).json({ message: 'Note deleted successfully', success: true });
})

export default app;