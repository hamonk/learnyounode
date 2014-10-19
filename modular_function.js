var fs = require('fs');
var path = require('path');

module.exports = listFiles;

function listFiles (dir,extension,callback) {

    var ext_to_match = undefined;

    if (extension != undefined) {
	ext_to_match = '.'+extension;
    }
    
    mylist = new Array();

    fs.readdir(dir, function (err,list) {

	if (err) return callback(err);
	
	for (var i=0; i < list.length; ++i) {

	    if ((path.extname(list[i]) == ext_to_match) ||
		( ext_to_match == undefined )){

		mylist[mylist.length] = list[i];
	    }
	}
	callback(null, mylist);
	//console.log(mylist);
    });
}

