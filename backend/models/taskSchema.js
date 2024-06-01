const mongoose = require('mongoose');

const reminderTime=()=>{
    const priority=this.priority||"Medium";
    const addedTime=6;

    if(priority==="High"){
        addedTime=2;
    }
    else{
        addedTime=12;
    }
    return addedTime;
}

const taskSchema=({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    priority:{
        type:String,
        default:"Medium"
    },
    date:{
        type:Date,
        default:Date.now
    },
    reminder:{
        type:Date,
        default:new Date(Date.now()+reminderTime()*60*60*1000)
    },
    recurring:{
        type:[]
    },
    userRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})