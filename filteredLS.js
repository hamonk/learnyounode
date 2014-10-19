var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
var ext_to_match = undefined;

if (ext != undefined) {
     ext_to_match = '.'+ext;
}

var buf = fs.readdir(dir, function (err,list) {
    if (err) throw err;

    for (var i=0; i < list.length; ++i) {
	
	if ((path.extname(list[i]) == ext_to_match) ||
	    ( ext_to_match == undefined )){
	    console.log(list[i]);
	}
    }
	
    
});
