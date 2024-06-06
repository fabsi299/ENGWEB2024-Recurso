var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose')

//  mongoose.connect('mongodb://ew-teste-mongodb-1/livros');
var mongoDB = 'mongodb://127.0.0.1:27017/livros'
mongoose.connect(mongoDB)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'))
db.once('open', () => {
    console.log("Conexão ao MongoDB realizada com sucesso")
})

var livrosRouter = require('./routes/livros');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', livrosRouter);

module.exports = app;