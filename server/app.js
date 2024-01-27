require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 5000

app.use(express.urlencoded({extended: true}))

const usersRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', postRouter)
app.use('/posts', postRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})