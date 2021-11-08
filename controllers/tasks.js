//MODELS
const Task = require('../models/task')


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        // const task = await Task.findOne({_id: id })
        const task = await Task.findById(taskID)

        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findByIdAndDelete(taskID)

        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({taskID})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findByIdAndUpdate(taskID,req.body,{
            new: true,
            runValidators: true
        })

        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
