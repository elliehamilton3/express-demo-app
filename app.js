const express = require('express')
const app = express()

const filterJsonReqOnly = function (req, res, next) {
    if(!req.accepts('json')) return res.sendStatus(404);
    next()
}
  
app.use(filterJsonReqOnly)

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;

