const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();

app.use(express.json());

app.use('/tasks', tasksRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});