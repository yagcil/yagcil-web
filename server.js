#!/bin/env node

/** Front-end server **/

var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

var port = parseInt(process.env.PORT) || 8000;
app.listen(port);
