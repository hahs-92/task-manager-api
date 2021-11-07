require('dotenv').config()

const config = {
    mongoUri: process.env.MONGO_URI
}

module.exports = config
