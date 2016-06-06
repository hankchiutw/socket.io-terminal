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
├── Dockerfile              # for building the docker image
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

### How it works
- ES6 syntax(generator, class, etc).
- Use [socket.io-handler](https://www.npmjs.com/package/socket.io-handler) to define socket.io event handlers in server side.
- Deploy using Docker
- Node.js [child_process.exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

### Quick start
```sh
# get source code
git clone git@github.com:hankchiutw/socket.io-terminal.git
cd socket.io-terminal

# build the docker image
npm run build

# run the docker container
npm run run

```

The output will be like:
```
[INFO @ 2016-06-06T03:23:18.444Z][args 0]: 
'Config socket handlers ...'
config: { apiPath: '/api/v1',
  host: 'localhost',
  publicHostUrl: 'http://localhost:80',
  port: 80,
  hostUrl: 'http://localhost:80',
  apiUrl: 'http://localhost:80/api/v1',
  publicApiUrl: 'http://localhost:80/api/v1' }
NODE_ENV: prod
Express app started on port: 80
Jun  6 03:23:18 477e1e19b2e9 syslog-ng[14]: syslog-ng starting up; version='3.5.3'
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS                      PORTS                                                                    NAMES
477e1e19b2e9        socket.io-terminal      "/sbin/my_init"          1 seconds ago       Up 1 seconds                0.0.0.0:3000->80/tcp                  
```

Use browser to open `http://public-address:3000` and see the socket.io-terminal!


### Development

#### Pre-install
```sh
npm install -g mocha pm2 concurrently
```

#### Install
```sh
npm install
```

#### Commands
```sh
npm start # start local dev instance
npm run log # show local process logs
npm stop # stop local dev instance
```

#### Docker related commands
```sh
npm run build # use the Dockerfile to build the docker image
npm run run # run a container
npm run rerun # kill and run a container
```

### ToDos
- RabbitMQ intergrated
- Client side socket.io-handler module
