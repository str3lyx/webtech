const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(8080, () => {
    console.log('App deploy')
})