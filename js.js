'use strict';
/*

x-middleware-js
===============

this middleware should minficate javascript content on the fly

*/
var uglify    = require('uglify-js-middleware');

module.exports=function(directory){
	var options={ // js compression
		src     : directory,
		mangle  : true,
		squeeze : true
	};
	
	return uglify(options);
};


