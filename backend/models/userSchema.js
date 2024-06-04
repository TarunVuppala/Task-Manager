import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    tasksRef:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Tasks'
    },
    notesRef:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Notes'
    },
    eventsRef:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Events'
    }
});

export default mongoose.model('Users',userSchema);