var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./'));
app.use(express.static('./public'));

app.use(function(req, res) {
 	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(83);
console.log('Site online on port 83');