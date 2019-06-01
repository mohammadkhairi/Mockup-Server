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
``const mongoMockupServer = new MongoMockupServer()``

### Example
```
before(() => {
  mongoMockupServer = new MongoMockupServer();
});
```

<br />

## Destroy
``mongoMockupServer.cleanup()``

### Example
```
after(() => {
   mongoMockupServer.cleanup();
});
```

