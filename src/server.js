const connectDB = require('./database/connectDB')
const app = require('./app')
const { port } = require('./config')

const connect = 'fdfdf'

// database connection
connectDB()

app.listen(port, () => console.log(`Listening Port on: ${port}`))
