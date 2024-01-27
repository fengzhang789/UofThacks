const express = require("express")
const router = express.Router()
var { Posts } = require('../database')

// get all posts
router.get('/', (req, res) => {
    Posts.find({}).then(posts => {
        response.json(posts)
    })
})

// get posts by location
// in request, pass in longitude, latitutde 
router.get('/location', (req, res) => {
    const rad = 50; // long/lat degrees
    //const maxlong = Math.sqrt(rad*rad + lat*lat) 
    //const maxlat = Math.sqrt(rad*rad + lat*lat) 
    Posts.find({long : {$lte: req.long + rad, $gte: req.long - rad}}, {lat: {$lte: req.lat + rad, $gte: req.lat - rad}}).then(posts => {
        response.json(posts).then(res => {
            console.log(res)
        })
    })
})

/*
{$filter: {
        input: "",
        cond: {$and: [
            { $gte: req.long - rad}
            { $lte: req.long + rad}
        ]}
    }}
*/

// create post
router.post('/', (req, res) => {
    console.log(req.body)
    // creating and saving new user
    const body = req.body;

    if (body.content === undefined) {
        return response.status(400).json({error: 'content missing'})
    }

    const post = new Posts({
        userid: body.userid,
        img: body.img, 
        long: body.long,
        lat: body.lat,
        date: body.date,
        comments: body.comments || []
    })

    post.save().then(result => {
        console.log('post saved')
        response.json(result)
    })
})

router.route("/:id").get((req, res) => {
    // Get post with id
    Posts.findById(req.params.id).then(post => {
        response.json(post)
    })
}).put((req, res) => {
    // Add comment to post with id
    Posts.findById(req.params.id).then(post => {
        
        const newComments = [... post.comments, body.comments] 
        post.comments = newComments;
        
        post.save().then(result => {
            console.log('post updated')
            response.json(result)
        })
    })    
}).delete((req, res) => {
    // Delete post with id
    Posts.deleteOne({id: req.params.id}).then((result) => {
        console.log(result);
    })
})

