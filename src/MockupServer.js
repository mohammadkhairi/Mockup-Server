'use strict'

const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoose = require('mongoose');

class MockupServer extends MongoMemoryServer{
    constructor() {
        super();
        this.setup();
    }

    async setup() { 
        try {
            //return promises of connection string
            const mongoUri = await this.getConnectionString();

            //return promise whether the mongoose connection is success or failed(reject)
            mongoose.connect(mongoUri, { useNewUrlParser: true });
        }
        catch (err) {
            throw err;  
        }
    }

    async cleanup() {
        mongoose.disconnect();

        try {
            await this.stop();
        }
        catch (err) {
            throw err;
        }
    }
}
module.exports = MockupServer;