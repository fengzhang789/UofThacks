var createError = require('http-errors');
require('dotenv').config()
const express = require('express')
const cors = require('cors')
var logger = require('morgan');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 5000

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.urlencoded({extended: false}))
//app.use(express.json())
/*app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
})); */

//const postRouter = require('./routes/posts')

//app.use('/posts', postRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posts', upload.single('file'), (req, res) => {
  res.file.then(res => {
    console.log(res)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})