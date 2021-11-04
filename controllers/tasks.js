const getAllTasks = (req, res) => {
    res.send('all tasks')
}

const createTask = (req, res) => {
    res.status(201).json(req.body)
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
