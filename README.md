# Mongodb Mockup Server Package

## Purpose
to mock mongodb during testing

## Installation
``npm install https://github.com/mohammadkhairi/Mockup-Server.git``

## Import
`` const MongoMockupServer = require('mongodb-mockup-server') ``


<br /><br />

# How To Use

## Initialization
``const mongoDBMockupServer = new MongoDBMockupServer()``

### Example
```
before(() => {
  mongoDBMockupServer = new MongoDBMockupServer();
});
```

<br />

## Destroy
``mongoDBMockupServer.cleanup()``

### Example
```
after(() => {
   mongoDBMockupServer.cleanup();
});
```

