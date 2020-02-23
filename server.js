const express = require('express');
// const mongoose = require('mongoose');
const sampleRouter = require('./routes/sample');

const app = express();

app.use(express.json());

app.use('/', sampleRouter);

app.listen(8080, () => console.log('Server started'));
