'use strict'

const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoose = require('mongoose');

const mongoMockServer = () => {
    const mongoMemoryServer = new MongoMemoryServer();

    return {
        // will return a mongodb connection
        setup: async () => {
            const mongoUri = await mongoMemoryServer.getConnectionString();
            return mongoose.connect(mongoUri, { useNewUrlParser: true, useFindAndModify: false });
        },
        // will cleanup every data
        cleanup: async () => {
            mongoose.disconnect();

            try {
                await mongoMemoryServer.stop();
            }
            catch (err) {
                throw err;
            }
        }
    }
}

module.exports = mongoMockServer;
