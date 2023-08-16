const mongoose = require('mongoose')
const { mongodb_database } = require('../config')

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_database)
    console.log('Database connection established..![MongoDB]')
  } catch (err) {
    console.log('[MongoDB]: Database connection Failed->', err)
  }
}

module.exports = connectDB
