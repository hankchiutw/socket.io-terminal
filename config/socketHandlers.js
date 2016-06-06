'use strict';
/** @module */

/**
 * Dispatch socket events of the io object
 * @param {Object} io Object of socket.io
 */
module.exports = function(server){
    logger.info('Config socket handlers ...');

    const handler = require('socket.io-handler')(server);

    handler.require('app/socketHandlers/proc');
    handler.defineEvents({
        message: function *(data){
            const socket = this;
            socket.emit('messageOk', data);
            socket.broadcast.emit('messageOk', data);
        },
        execOk: function *(result){
            console.log('execOk:', result);
        }
    });

};

