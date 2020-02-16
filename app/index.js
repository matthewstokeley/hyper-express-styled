/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const ROUTE = './api'
const VERSION = '/1.0.0'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declaration
 */

var express = require( 'express' )
var config = require( './config' )
var app = express()


/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Script
 */

//  run application lifecycle configuration before route declaration

config.init( app )

let routes = [
	'/generic'
]

for ( let i = 0; i < routes.length; i++) {
	app.use( ROUTE + VERSION, require('./api' + routes[ i ] ) )
}

//  run application lifecycle configuration after route declaration

config.handleErrors( app )

// Default Export

module.exports = app