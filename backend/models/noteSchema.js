import mongoose from 'mongoose';

const noteSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    userRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

export default mongoose.model('Notes',noteSchema)