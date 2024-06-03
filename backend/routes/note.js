const express = require('express');
const app = express();
const Notes = require('../models/noteSchema');
const Users = require('../models/userSchema');

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await Users.findById(id);
    const notes = await Notes.find({ userRef: user._id });
    res.status(200).json({ notes, success: true });
});

app.post('/:id', async (req, res) => {
    const id = req.params.id;
    
    const { heading, description } = req.body;
    console.log(req.body);
    const user = await Users.findById(id);
    console.log(user);
    const newNote = await Notes.create({
        heading,
        note:description,
        userRef: user._id
    });
    user.notesRef.push(newNote._id);
    await user.save();
    res.status(200).json({ newNote, success: true });
});

module.exports = app;
