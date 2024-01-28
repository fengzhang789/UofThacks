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
      comments: req.body.comments || [],
      expiryDate: req.body.expiryDate
  })

  post.save().then(result => {
      console.log('post saved')
      res.json(result)
  })
  // res.send(JSON.stringify(bufferProcess.default("image/png", req.file.buffer)))
})

app.post('/profile/:id', (req, res) => {
  Posts.find({userid: req.params.id}).then(post => {
    console.log(`post: ${post}`)
    res.send(post)
  })
})


app.post('/comments/:id', (req, res) => {
  Posts.find().then(post => {
    const response = post.filter(item => item.userid !== req.params.id)
    res.send(response)
  })
})


app.post('/add-comment/:id', (req, res) => {
  const postId = req.params.id;
  const { post, comments, commentingUser } = req.body;

  Posts.findByIdAndUpdate(postId, {
    comments: [...post.comments, {user: commentingUser, comment: comments}]
  }).then(res => console.log("updated the database!!"))
  // Posts.findById(req.params.id).then(post => {
  //   let comment = req.body
  //   let newPost = new Posts({
  //     ...req.body.post,
  //     comments: [...req.body.post.comments, comment]
  // })
  // newPost.save().then(result => {
  //   console.log('comment added')
  //   res.json(result)
  //   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})