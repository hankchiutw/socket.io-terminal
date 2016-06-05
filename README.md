# socket.io-terminal
Demonstrate socket.io usage

### Folder structure
```sh
.
├── app
│   └── socketHandlers      # socket.io event handler implementations
├── app.js                  # boot and run testing
├── config                  # app configurations
│   ├── config.js           # basic app settings
│   ├── env                 # environment settings(respective)
│   ├── express.js          # setup express
│   └── socketHandlers.js   # load app/socketHandlers
├── ecosystem.json          # deployment settings
├── lib                     # customized libraries
├── package.json
├── public                  # static files location
├── README.md               # this file
├── server                  # server side scripts, ex. do migration
│   └── lib
├── test                    # testing scripts
└── test-runner.js          # where test scripts invoked from
```

### Features
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
