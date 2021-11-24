const mongoose = require('mongoose');
//schema for my task list
const taskSchema = new mongoose.Schema({

    task:{
        type:String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type:String,
        required: true
    }

})
//creating collection of tasks and exporting
const Task= mongoose.model('Task', taskSchema);
module.exports= Task;