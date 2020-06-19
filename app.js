const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv');

const authHandler = require('./routes/authHandler');
const booksHandler = require('./routes/booksHandler');

const app = express();

// Setting up middleware
app.use(logger('dev')); // Logs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', authHandler);
app.use('/api/books', booksHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log("Server running on port " + PORT);
})