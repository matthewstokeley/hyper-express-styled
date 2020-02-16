/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Declarations
 */

var Joi = require('joi');

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Object Declaration
 *  @todo add typescript decorators
 */

/**
 *
 * @type {Object}
 */
var page = {
    /**
     * @type {Object}
     */
    get: {
        /**
         * @type {Object}
         */
        body: {
            /**
             * @type {Int}
             */
            // token: Joi.string().required()
        }
    }
};

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Module Exports Declaration
 */

module.exports = page;