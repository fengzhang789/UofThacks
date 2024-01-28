var createError = require('http-errors');
require('dotenv').config()
const express = require('express')
const cors = require('cors')
var logger = require('morgan');
const multer = require('multer');
const upload = multer(); 
const bodyParser = require('body-parser')
const bufferProcess = require("buffer-to-data-url")
var { Posts } = require('./database.js')

const app = express()
const port = 5000

app.use(cors())
app.use(logger('dev'));
app.use(express.json({limit: '10mb'}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// UPLOAD AN IMAGE TO MONGODB
app.post('/posts', upload.single("image"), (req, res) => {
  // creating and saving new user
  console.log(req.file)
  console.log(req.body)

  const imgStr = bufferProcess.default("image/png", req.file.buffer)

  const post = new Posts({
      userid: req.body.userid,
      img: imgStr,
      long: req.body.long,
      lat: req.body.lat,
      date: req.body.date,
      comments: req.body.comments || []
  })

  post.save().then(result => {
      console.log('post saved')
      res.json(result)
  })
  // res.send(JSON.stringify(bufferProcess.default("image/png", req.file.buffer)))
})

app.post('/profile/:id', (req, res) => {
  console.log("run")
  Posts.find({userid: req.params.id}).then(post => {
    console.log(`post: ${post}`)
    res.send(post)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})