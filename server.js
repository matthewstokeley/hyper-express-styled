#! /usr/bin/env node

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declarations
 */

var app = require( './app/index' )
var config = require( './config' )

app.listen( 
	process.config.express.port,
	process.config.express.ip,
	( err ) => {

	if ( err ) {
		process.exit( 1 )
	}

} )