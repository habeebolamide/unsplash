const mongoose = require('mongoose')
const express = require('express');
const img = require('./routes/uploads')
const app = express();

app.use(express.json());
app.use('/api/upload', img);
app.use('/uploads', express.static('uploads'))
mongoose.connect('mongodb://localhost/img').then(() => {
    console.log('Connected Successfully');
}).catch((err) => {
    console.log(err);
})

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`http://localhost:${port}`));
