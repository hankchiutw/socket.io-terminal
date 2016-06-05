'use strict';

const express = require('express');
const config = require('config/config');

const app = express();

/**
 * Bootstrap
 */

require('config/express')(app);

boot();

function boot(){
    let portInit = process.env.PORT || config.port;
    (function boot(){
        let port = portInit;
        portInit++;

        const server = app.listen(port, function(){
            console.log('config:', config);
            console.log('NODE_ENV:', process.env.NODE_ENV);
            console.log('Express app started on port:', port);
        }).on('error', function(err){
            if(err.code == 'EADDRINUSE'){
                console.log('****** EADDRINUSE, find next');
                boot();
            }
        });

        /**
         * Boot socket.io
         */
        require('config/socketHandlers')(server);

    })();
}
