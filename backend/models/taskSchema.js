const mongoose = require('mongoose');

// Define a function to calculate the reminder time based on priority
const reminderTime = function() {
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

// Define a function to get frequency dates
const getFrequencyDates = function(recurring) {
    const dates = [];
    const currentDate = new Date();

    switch (recurring.toLowerCase()) {
        case 'daily':
            for (let i = 0; i < 30; i++) { // 30 days in a month
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() + i);
                dates.push(newDate);
            }
            break;
        case 'weekly':
            for (let i = 0; i < 4; i++) { // 4 weeks in a month
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() + (i * 7));
                dates.push(newDate);
            }
            break;
        case 'monthly':
            for (let i = 0; i < 5; i++) { // 5 months
                const newDate = new Date(currentDate);
                newDate.setMonth(currentDate.getMonth() + i);
                dates.push(newDate);
            }
            break;
        case 'yearly':
            for (let i = 0; i < 5; i++) { // 5 years
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

// Define the Task schema
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
        default: function() {
            return new Date(Date.now() + reminderTime.apply(this) * 60 * 60 * 1000);
        }
    },
    recurring: {
        type: String,
        default: "None"
    },
    recurringDates: {
        type: [Date],
        default: function() {
            return this.recurring === "None" ? [] : getFrequencyDates(this.recurring);
        }
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Task', taskSchema);