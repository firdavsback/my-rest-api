const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json())

const courses = [
    {id:1,name:"frontend"},
    {id:2,name:"backend"},
    {id:3,name:"fullstack"},
];


//GET methods
app.get('/',(req,res)=>{
    res.send("Helo");
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(b=>b.id===parseInt(req.params.id));
    if(!course) return res.status(404).send("Id ga muvofiq data topilmadi")
    res.send(course);
})

//POST method
app.post('/api/courses',(req,res)=>{
    const course = {
        id:courses.length +1,
        name:req.body.name
    }

    courses.push(course);
    res.status(201).send(course);
})

//PUT methods

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(b=>b.id===parseInt(req.params.id));
    if(!course) return res.status(404).send("Id ga muvofiq data topilmadi");

    course.name = req.body.name;
    res.status(201).send(course);
});

//DELETE method
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(b=>b.id===parseInt(req.params.id));
    if(!course) return res.status(404).send("Id ga muvofiq data topilmadi");

    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send("Data deleted")
})












const port = process.env.PORT || 5050;
app.listen(port,()=>{
    console.log(`${port} ni tinglamoqdaman...`)
})