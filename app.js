const express = require('express')
//CONFIG
const config = require('./config/config')
//DB
// require('./db/connect')
const connectDB = require('./db/connect')
//ROUTES
const routeTasks = require('./routes/tasks')

const app = express()

app.use(express.static('./public')) //para renderizar la pagina
app.use(express.json())

const PORT = 3005

//ROUTES
app.use('/api/v1/tasks', routeTasks)

const start = async () => {
    try {
        await connectDB(config.mongoUri)

        app.listen(PORT, console.log(`server is listening on port ${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

start()
