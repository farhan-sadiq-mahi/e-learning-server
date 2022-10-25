const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello mada faka')
})

app.listen(port, () => {
    console.log('server runnig on port:', port)
})