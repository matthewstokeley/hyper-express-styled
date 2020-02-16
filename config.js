/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Constants Declaration
 */

const PRODUCTION = process.env.NODE_ENV === 'production' ? true : false

/*  Config Declaration
 */
process.config.express = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: "127.0.0.1"
}
