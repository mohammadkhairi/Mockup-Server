# Mongodb Mockup Server Package

## Introduction
`mongodb-mockup-server` is a wrapper package use to wrapped around 'mongodb-memory-server'. This wrapper is to ensure that the code written by the developers will be reduced.

## Installation
``npm install https://github.com/mohammadkhairi/Mockup-Server.git``

## Import
``` const mongoMockupServer = require('mongodb-mockup-server'); ```



<br /><br />

# How To Use

## Initialization
``const mongMockupServer = mongoMockupServer();``

### Example
```
before(() => {
  mongMockupServer = mongoMockupServer();
});
```

<br />

## Destroy
``mongMockupServer.cleanup();``

### Example
```
after(() => {
   mongoDBMockupServer.cleanup();
});

```

## Code Example
```
const mongMockupServer = mongoMockupServer();
const connection = await mongMockupServer.setup();

const model = connection.model('Account', accountSchema);
```
