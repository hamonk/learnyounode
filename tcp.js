var net = require('net')
var port = process.argv[2];
var strftime = require('strftime')

var server = net.createServer(function (socket) {
    //socket.write('test');
    socket.end(strftime('%Y-%m-%d %H:%M\n',new Date()));
})
server.listen(port)
