var http = require('http');
var url = process.argv[2];
var res = "";

http.get(url,function (response) {
    
    response.setEncoding('utf8');

    var list = new Array(); 
    var str = '';
    response.on("data", function(data) {
	list[list.length] = data;
	str += data;
    });

    response.on('error', console.error);

    response.on('end', function() {
	//console.log("that's it, we got "+list.length+" elements");
	console.log(str.length);
	console.log(str);
    });
});


	
