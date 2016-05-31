# socket.io-seed
API service seed project using express.js with socket.io
[![travis status](https://travis-ci.org/hankchiutw/socket.io-seed.svg?branch=master)](https://travis-ci.org/hankchiutw/socket.io-seed)

### Folder structure
```sh
.
├── app
│   ├── controllers         # api implementations
│   ├── models              # schema definitions
│   ├── routes              # router definitions
│   ├── services            # standalone services
│   └── socketHandlers      # socket.io event handler implementations
├── app.js                  # boot and run testing
├── config                  # app configurations
│   ├── auth                # authentication libraries(passport)
│   ├── auth.js             # load auth libraries
│   ├── config.js           # basic app settings
│   ├── db.js               # handle database connection
│   ├── env                 # environment settings(respective)
│   ├── express.js          # setup express
│   ├── middlewares         # common middlewares
│   ├── routes.js           # load app/routes
│   └── socketHandlers.js   # load app/socketHandlers
├── ecosystem.json          # deployment settings
├── lib                     # customized libraries
├── package.json
├── public                  # static files location
├── README.md               # this file
├── server                  # server side scripts, ex. do migration
│   └── lib
├── test                    # testing scripts
│   ├── api.spec.js
│   ├── lib
│   └── user.js
└── test-runner.js          # where test scripts invoked from
```

### Features
- Extended MongoDB driver [mongoose-extend](https://www.npmjs.com/package/mongoose-extend).
- Deploy using [pm2](http://pm2.keymetrics.io/).
- ES6 syntax(generator, class, etc).
- Use [socket.io-handler](https://www.npmjs.com/package/socket.io-handler) to define socket.io event handlers.

### Pre-install

```sh
npm install -g mocha pm2 concurrently
```

### Install

```sh
npm install
```

### Development

```sh
npm start # local dev environment
npm run deploy:prod # git push to production branch and deploy to production server
npm run log # show local process logs
npm run log:prod # show remote process logs(production server)
npm test # run test scripts
```
