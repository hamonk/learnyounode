var http = require('http')
var bl = require('bl')
var res = new Array();
var count = 0;

for (var i=2; i<5; ++i) {
    getUrl(process.argv[i],i-2);
}


function getUrl (url,index) {
    http.get(url, function (response) {
	response.pipe(bl(function (err, data) {
	    if (err)
		return console.error(err)
	    data = data.toString()
	    count += 1;
	    res[index] = data;

	    if (count == 3) {
		for (var j=0; j<3; ++j) {
		    console.log(res[j]);
		}
	    }
	    //console.log(data.length)
	    //console.log(data)
	    
	}))  
    })
}
