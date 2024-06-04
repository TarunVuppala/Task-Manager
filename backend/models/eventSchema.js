import mongoose from "mongoose";

const eventSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    userRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
})

export default mongoose.model('Events',eventSchema)