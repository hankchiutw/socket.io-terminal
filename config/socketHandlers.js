'use strict';
/** @module */

/**
 * Dispatch socket events of the io object
 * @param {Object} io Object of socket.io
 */
module.exports = function(server){
    logger.info('Config socket handlers ...');

    const handler = require('socket.io-handler')(server);

    handler.defineEvents({
        execOk: function *(result){
            console.log('execOk:', result);
        }
    });

    handler.require('app/socketHandlers/proc');

};

