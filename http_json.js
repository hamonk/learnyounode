var http = require('http');
var url = require('url');
var strftime = require('strftime');
var JSON = require('JSON');

var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {

    var url_details = url.parse(req.url, true)
    var date = new Date(url_details.query.iso);
    var reponse = '';
    //    console.log(strftime('%Y-%m-%d %H:%M',new Date(date)));

    if (url_details.pathname == '/api/unixtime') {
	response = { "unixtime" : date.getTime() };
    }

    if (url_details.pathname == '/api/parsetime') {
	response = { "hour": date.getHours(), 
		    "minute": date.getMinutes(),
		    "second": date.getSeconds() };
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(response));
    res.end();

})

server.listen(port)
