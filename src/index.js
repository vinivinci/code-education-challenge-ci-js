const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ data: 'Full Cycle!' })
})

app.listen(3000, () => {
    console.log('Running in 3000 port');
})