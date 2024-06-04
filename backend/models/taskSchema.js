import mongoose from 'mongoose';

const reminderTime = function () {
    const priority = this.priority || "Medium";
    let addedTime;

    switch (priority) {
        case "High":
            addedTime = 2;
            break;
        case "Medium":
            addedTime = 6;
            break;
        default:
            addedTime = 12;
            break;
    }
    return addedTime;
};

const getFrequencyDates = function (recurring) {
    const dates = [];
    const currentDate = new Date();

    switch (recurring.toLowerCase()) {
        case 'daily':
            for (let i = 0; i < 30; i++) { 
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() + i);
                dates.push(newDate);
            }
            break;
        case 'weekly':
            for (let i = 0; i < 4; i++) { 
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() + (i * 7));
                dates.push(newDate);
            }
            break;
        case 'monthly':
            for (let i = 0; i < 5; i++) { 
                const newDate = new Date(currentDate);
                newDate.setMonth(currentDate.getMonth() + i);
                dates.push(newDate);
            }
            break;
        case 'yearly':
            for (let i = 0; i < 5; i++) { 
                const newDate = new Date(currentDate);
                newDate.setFullYear(currentDate.getFullYear() + i);
                dates.push(newDate);
            }
            break;
        default:
            break;
    }

    return dates;
};

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    priority: {
        type: String,
        default: "Medium"
    },
    date: {
        type: Date,
        default: Date.now
    },
    reminder: {
        type: Date,
        default: function () {
            return new Date(Date.now() + 5.5 * 60 * 60 * 1000 + reminderTime.apply(this) * 60 * 60 * 1000);
        }
    },
    recurring: {
        type: String,
        default: "None"
    },
    recurringDates: {
        type: [Date],
        default: function () {
            return this.recurring === "None" ? [] : getFrequencyDates(this.recurring);
        }
    },
    completed:{
        type: Boolean,
        default: false
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

export default mongoose.model('Tasks', taskSchema);