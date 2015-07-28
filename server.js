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

var host = process.env.OPENSHIFT_NODEJS_IP || 'localhost';
var port = parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8000;
app.listen(port, host, function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Server is listening at http://%s:%d', host, port);
});