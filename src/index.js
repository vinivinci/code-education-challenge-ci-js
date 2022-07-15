const express = require('express')
const sum = require('./data')
const app = express()

app.get('/', (res) => {
    res.send(sum(1, 432));
})

app.listen(3000, () => {
    console.log('Running in 3000 port');
})



