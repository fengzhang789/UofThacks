const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envFilePath });

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@uofthackcluster.8qv5xpm.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', err => {
    logError(err);
});

const postSchema = new mongoose.Schema({
    userid: String,
    image: String, // how to store image?
    location: String,
    date: {type: Date, default: Date.now},
    comments: [{user: String, comment: String}]
});

const Posts = db.model('post', postSchema);
// model is a class with which we construct documents
// each document is a post w/ properties and behaviours as declared in our schema

module.exports = { Posts };