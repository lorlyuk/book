'use strict'
var http = require('http'), express = require('express');
var bodyParser = require("body-parser");
var backboneBook = require('./models/backboneBook');
var app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/settings', function (req, res) {
    res.send(backboneBook.getSettings());
});
app.post('/registration', function (req, res) {
    res.send(backboneBook.registration(req.body)) ;
});

app.post('/login', function (req, res) {
    res.send(backboneBook.login(req.body)) ;
});

app.post('/getData', function (req, res) {
    res.send(backboneBook.getData(req.body)) ;
});

app.post('/postData', function (req, res) {
    res.send(backboneBook.postData(req.body)) ;
});

app.post('/logout', function (req, res) {
    res.send(backboneBook.logout(req.body)) ;
});

app.listen(3000, function () {
    console.log('book is listening on port 3000!');
});