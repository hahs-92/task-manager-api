//MODELS
const Task = require('../models/task')
//MIDDLEWARES
const asyncWrapper = require('../middlewares/async')
//ERROS
const { createCustomError }  = require('../errors/custom-error')


const createTask =  asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})


const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    // const task = await Task.findOne({_id: id })
    const task = await Task.findById(taskID)

    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
        // return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json({task})
})


const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params

    const task = await Task.findByIdAndDelete(taskID)

    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }

    res.status(200).json({taskID})
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params

    const task = await Task.findByIdAndUpdate(taskID,req.body,{
        new: true,
        runValidators: true
    })

    if(!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }

    res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
