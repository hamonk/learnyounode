var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function (req, res) {

    var src = fs.createReadStream(file);
    src.pipe(res);

})
server.listen(port)
