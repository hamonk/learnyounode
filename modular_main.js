var listFiles = require('./modular_function.js');
var dir = process.argv[2];
var ext = process.argv[3];


listFiles(dir,ext,function (err,list) {

    if (err) throw err;

    for (var i=0; i < list.length; ++i) {
	console.log(list[i]);
    }
    //console.log(list);

});
