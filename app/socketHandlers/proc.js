'use strict';
/** @module */

//const spawn = require('child_process').spawn;
const spawn = require('child_process').exec;

/**
 * Event handlers for User events
 */
module.exports = {
    exec
};

/**
 * userLogin handler
 * Emit userLoginOk event if success
 * @param {String} username Data passed from event source
 * @fires user#userLoginOk
 */
function *exec(command){
    const socket = this;

    try{
        command = JSON.parse(command);
    }catch(e){}
    console.log('spawn:', command);
    const proc = spawn(command);
    proc.stdout.on('data', function(data){
        console.log('stdout:', data.toString());
        socket.emit('execOk', data.toString());
        socket.broadcast.emit('execOk', data.toString());
    });

    proc.stderr.on('data', function(data){
        socket.emit('execErr', data.toString());
    });
}

