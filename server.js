const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Todo = require('./models/Todo');  // Import the Todo model
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourGoals', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes

// GET all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
    }
});

// POST a new todo
app.post('/todos', async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({
            title,
            completed: false
        });

        await newTodo.save();
        res.status(201).json(newTodo);  // Respond with the created todo
    } catch (err) {
        res.status(500).json({ message: 'Error adding todo', error: err });
    }
});

// PUT to update a todo (mark as completed)
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: 'Error updating todo', error: err });
    }
});

// DELETE a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting todo', error: err });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
