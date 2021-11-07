//MODELS
const Task = require('../models/task')


const getAllTasks = async (req, res) => {
    res.send('all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)

    res.status(201).json({ task })
}

const getTask = (req, res) => {
    const { id } = req.params
    res.json({ id })
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
