const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use('/static', express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.send('' + (a+b))
})

app.post('/post_add', bodyParser.json(), (req, res) => {
    let a = parseInt(req.body.a)
    let b = parseInt(req.body.b)
    res.send('' + (a+b))
})

app.listen(8080, () => {
    console.log('App deploy')
})