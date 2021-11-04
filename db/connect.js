const mongoose = require('mongoose')

const connectionString = `mongodb+srv://hahs:TravelMate@cluster0.eeppm.mongodb.net/tasks-manager-api?retryWrites=true&w=majority`

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
