require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { auth, requiresAuth } = require('express-openid-connect')

// AUTH0 CONFIG 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'xDGHzMPBoth79F9I6Mc4DgMZp2j7pg25',
  issuerBaseURL: 'https://dev-h8c1qgz2u0vwfqsz.us.auth0.com'
}

const app = express()
app.use(cors())
app.use(auth(config))
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// AN EXAMPLE ROUTE THAT REQUIRES AUTH TO GO TO.
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})