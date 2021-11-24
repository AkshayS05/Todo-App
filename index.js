//user npm start to run the server
//require express 
const express = require('express');
const path = require('path');
const port = 8080;
const db= require('./config/mongoose')
//importing task.js
const Task= require('./models/task')
const app = express();

app.get('/', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
    return res.render('home',{
        title: "TODO List",
        tasks_list: tasks
    });
});
});

app.use(express.urlencoded());

//seup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//folder for all the static files:css, javascript
app.use(express.static('assets'));
//function to create a new task
app.post('/create-contact', (req,res)=>{
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log('Error in adding a task');
            return;
        }
        console.log('*********', newTask);
        return res.redirect('back');
    });
});

//for deleting a task
app.get("/delete-task", function(req,res){
    //get the id from the query in the url
     let id= req.query;
     var count = Object.keys(id).length;
console.log(count);
for(let i=0; i<count; i++){
    Task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('Error in deleting an object from the database',err);
            
           return;    
        }
    })
}
        return res.redirect('back');

    });
    
//app listening on a server 8080, in case of error will print the error
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})