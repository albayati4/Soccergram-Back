const express = require('express')
const cors = require('cors')

const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))