 const express = require('express');
 const {v4: uuid4} = require('uuid');

 const taskRoutes = express.Router();

 const tasks = [];

 taskRoutes.post('/', (req, res ) => {
    const  {title, description}  = req.body;

    if(!title || !description) {
        return res.status(400).json({error : 'Title and description are require!'})
    }

    const task = {
        id: uuid4(),
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
    };

    tasks.push(task);
    return res.status(201).json(task)
 })

 module.exports = taskRoutes;