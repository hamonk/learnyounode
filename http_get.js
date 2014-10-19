var http = require('http');
var url = process.argv[2];
var res = "";

http.get(url,function (response) {
    
    //console.log("Got response: "+response.statusCode);
    response.setEncoding('utf8');

    // first version not optmized:
    //response.on("data", function (data) {
    //console.log(data);
    //});

    // easier version:
    response.on("data", console.log) ;
    response.on('error', console.error);
    
});


	
