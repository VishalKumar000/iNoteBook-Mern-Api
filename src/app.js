require('dotenv')
require('./db/connect')
const express = require('express')
const cors = require('cors')
const app = express()
 
//* middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

//* Available routes
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

app.get('*', async (req, res) => {
    res.status(200).json({
        success: false,
        msg: 'bad request'
    })
})

const port = 5000
app.listen(port, () => console.log(port))