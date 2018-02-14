var express = require('express');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
app.use(express.static('dist'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


