'use strict';
/** @module */

const errorHandler = require("config/middlewares/errorHandler");

/**
 * Dispatch socket events of the io object
 * @param {Object} io Object of socket.io
 */
module.exports = function(server){
    logger.info('Config socket handlers ...');

    const handler = require('socket.io-handler')(server);
    handler.require('app/socketHandlers/user');
    handler.require('app/socketHandlers/auction');
    
};

