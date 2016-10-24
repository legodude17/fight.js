var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static());
app.get('/', function (req, res) {
    'use strict';
    res.redirect('/index.html');
});
app.listen(3000, function () {
    'use strict';
    console.log('Ready captain');
});
